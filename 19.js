firstOfMonthArray = () => {
	// starts in march, isLeapYear determines whether after the array is done we add 28 or 29.  
	// and then 28 on leap years. 
	var arrayOfMonthLengths = [31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31] 
	let isLeapYear = (year) => {
  	return (year % 4 === 0);  
	}
	var ret = [1, 30] // jan and feb
	var year = 1901;
	// this only counts between march 1900 and march 2001
	while (year < 2001) {
		for (i = 0; i < arrayOfMonthLengths.length; i++) {
			ret[ret.length] = ret[ret.length - 1] + arrayOfMonthLengths[i]
		}
		if (isLeapYear(year)) {
			// add 29
			ret[ret.length] = ret[ret.length - 1] + 29
		} else {
			// add 28
			ret[ret.length] = ret[ret.length - 1] + 28
		}
		year++
	} 
	return ret.filter((e) => e%7 === 0).length; 
}

console.log(firstOfMonthArray())
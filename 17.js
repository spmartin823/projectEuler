var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};


threeLetterToNum = (num, acc = '') => {
  num = parseInt(num)
  if (num < 20) {
    acc += numbersToWords[num]
  } else if (num < 100) {
    acc += numbersToWords[Math.floor(num/10) * 10] 
    if (num % 10 !== 0){
      acc += " " + numbersToWords[num % 10]
    }
  } else if (num > 100){
    let hundreds = Math.floor(num / 100)
    let acc = numbersToWords[hundreds] + ' hundred'
    if (num % 100 !== 0) {
      return threeLetterToNum(num % 100, acc + ' ')
    }
      return acc
  }
  return acc;  
}


function numberToEnglish (number) {
  if (number === 0) return "zero"
  if (number > 10 && numbersToPlace[number] !== undefined) {
    let firstDigit = number.toString()[0]
    return numbersToWords[parseInt(firstDigit)] + ' ' + numbersToPlace[number]
  }
  // break up into groups of three: 
  number = number.toString().split('').reverse().join('').match(/.{1,3}/g).reverse().map(e => e.split('').reverse().join(''))
  let final = ""
  for (let i = 0; i < number.length; i++) {
    if (parseInt(number[i]) !== 0) {
      final += threeLetterToNum(number[i]) 
      if (number[i + 1]) {
      final += ' ' + numbersToPlace[parseInt('1' + Array(number.length - i).join('000'))] + ' '
      }
    }
  }
  return final.trim(); 
}

console.log(numberToEnglish(123))


firstXSum = (start, end) => {
  // for the project euler problem, you need an 'and' after all hundreds, except 
  // on the thousands. to account for this, we add three to the length if the 
  // number is above 100 and also is not divisible by 100.  
  let totalCount = 0; 

  for(let i = start; i <= end; i++) {
    let words = numberToEnglish(i)
    console.log('word:', words)
    let length = words.split(' ').join('').length
    if (i > 100 && i % 100 !== 0) {
      length += 3
    }
    totalCount += length; 
  }
  return totalCount; 
}

console.log(firstXSum(1, 1000)) // this gives you the solution


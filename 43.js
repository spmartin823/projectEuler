// INCOMPLETE

// The number, 1406357289, is a 0 to 9 pandigital number because it is made up of 
// each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

// Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

// d2d3d4=406 is divisible by 2
// d3d4d5=063 is divisible by 3
// d4d5d6=635 is divisible by 5
// d5d6d7=357 is divisible by 7
// d6d7d8=572 is divisible by 11
// d7d8d9=728 is divisible by 13
// d8d9d10=289 is divisible by 17
// Find the sum of all 0 to 9 pandigital numbers with this property.

let isPandigital = (num) => {
  num = num.toString().split('').map(e => parseInt(e))
  for (let i = 1; i <= num.length; i++) {
    if (!num.includes(i)) {
      return false 
    }
  }
  return true
}

let getSubstrings = (num) => {
  num = num.toString()
  subs = []; 
  for (let i = 1; i < num.length - 2; i++) {
    sub = num.slice(i, i + 3)
    subs.push(parseInt(sub))
  }
  return subs
}

let substringsAreDivisible = (subs) => {
  let divisors = [2,3,5,7,11,13,17]
  for (let i = 0; i < divisors.length; i++) {
    if (subs[i] % divisors[i] !== 0) {
      return false
    }
  }
  return true;
}

// console.log(substringsAreDivisible(getSubstrings(1406357289)))


let getAllTenDigitSpecials = () => {
  let pandigitalSpecials = []
  for (i = 1000000000; i < 9999999999; i++) {
    if (isPandigital(i) && substringsAreDivisible(getSubstrings(i))) {
      console.log('pandigitalSpecial: ', i)
      pandigitalSpecials.push(i)
    }
  }
  console.log(pandigitalSpecials)
  return pandigitalSpecials.reduce((a, e) => a + e)
}

console.log(getAllTenDigitSpecials())






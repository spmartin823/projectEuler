// solved

// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
// Find the sum of all numbers which are equal to the sum of the factorial of their digits.
// Note: as 1! = 1 and 2! = 2 are not sums they are not included.

let getDigits = (num) => num.toString().split('').map(e => parseInt(e))
let factorial = (num) => {
  let sum = 1
  for (let i = 1; i <= num; i++) {
    sum *= i
  }
  return sum
}

let getFactorialSumOfDigits = (num) => getDigits(num).reduce((a, e) => factorial(e) + a, 0)

let findDigitFactorials = (end) => {
  let arr = []
  for (i = 0; i < end; i++) {
    if (i === getFactorialSumOfDigits(i)) {
      arr.push(i)
    }
  }
  // -3 to account for 1, 2
  return arr.reduce((a, e) => a + e, -3); 
}

console.log(findDigitFactorials(500000))

// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each
//  of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 
// and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.


let getSumOfDivisors = (num) => {
  divisors = [1]; 
  for (i = 2; i <= num ** 0.5; i++) {
    if (num % i === 0) {
      divisors.push(i)
      divisors.push(num/i)
    }
  }
  return divisors.reduce((a, e) => a + e); 
}

let findAmicableNumbersUnder = max => {
  let amicableNums = []
  for (let num = 1; num < max; num++) {
    if (num === getSumOfDivisors(getSumOfDivisors(num)) && num !== getSumOfDivisors(num)) {
      amicableNums.push(num)
    }
  }
  return amicableNums.reduce((a, e) => a + e); 
}

console.log(findAmicableNumbersUnder(10000))
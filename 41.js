// We shall say that an n-digit number is pandigital if it makes use of all the 
// digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

// What is the largest n-digit pandigital prime that exists?


let isPandigital = (num) => {
  num = num.toString().split('').map(e => parseInt(e))
  for (let i = 1; i <= num.length; i++) {
    if (!num.includes(i)) {
      return false 
    }
  }
  return true
}

let isPrime = (num) => {
  if (num === 1 || num === 2) {return true}
  if (num % 2 === 0) {return false}
  for (let i = 3; i <= num ** 0.5; i += 2) {
    if (num % i === 0) {return false}
  }
  return true;
}

// console.log(isPrime(81))

let isPandigitalAndPrime = (num) => isPandigital(num) && isPrime(num)

let largestPandigitalPrime = (min, max) => {
  let largest = 1
  for (let i = min; i < max; i += 2) {
    if (isPandigitalAndPrime(i)) {
      largest = i
    }
  }
  return largest;
}
// 7 digits is enough lol
console.log(largestPandigitalPrime(1, 10000000))
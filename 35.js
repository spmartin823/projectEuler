// The number, 197, is called a circular prime because all rotations of the digits: 
// 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?

let isPrime = (num) => {
  if (num === 1 || num === 2) { return true }
  if (num % 2 === 0) { return false }
  for (let i = 3; i <= (num ** .5); i += 2) {
    if (num % i === 0) return false
  }
  return true;
}

let getNumberRotations = (num) => {
  let numberRotations = []
  let digits = num.toString().split('')
  for (let i = 0; i < digits.length; i++) {
    numberRotations.push(parseInt(digits.join('')))
    let last = digits.pop()
    digits.unshift(last)
  }
  return numberRotations
}

let getCircularPrimesUnderCount = (num) => {
  let count = 0
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      if (getNumberRotations(i).reduce((a, e) => a && isPrime(e), true)) {
        count++
      }
    }
  }
  return count
}

console.log(getCircularPrimesUnderCount(1000000))


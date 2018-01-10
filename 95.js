// The proper divisors of a number are all the divisors excluding the number itself.
// For example, the proper divisors of 28 are 1, 2, 4, 7, and 14. As the sum of 
// these divisors is equal to 28, we call it a perfect number.

// Interestingly the sum of the proper divisors of 220 is 284 and the sum of the 
// proper divisors of 284 is 220, forming a chain of two numbers. For this reason, 
// 220 and 284 are called an amicable pair.

// Perhaps less well known are longer chains. For example, starting with 12496, 
// we form a chain of five numbers:

// 12496 → 14288 → 15472 → 14536 → 14264 (→ 12496 → ...)

// Since this chain returns to its starting point, it is called an amicable chain.

// Find the smallest member of the longest amicable chain with no element exceeding one million.

// this works well for all numbers that are above 4.
let getSumOfProperDivisors = num => {
  let divisorSum = 1
  for (let i = 2; i < num ** .5; i++) {
    if (num % i === 0) { 
      divisorSum += i
      if (num/i !== i) divisorSum += num/i
    }
  }
  return divisorSum
}

// console.log(getSumOfProperDivisors(12496))

checkForChainUpTo = (num, max) => {
  let start = num
  let chain = [start]
  for (let i = 0; i < max; i++) {
    let last = chain[chain.length - 1]
    if (last > 1000000) {return 0}
    let next = getSumOfProperDivisors(last)
    if (next === start) {
      return chain.length
    } else {
      chain[chain.length] = next; 
    }
  }
  return 0 // this means that no chain existed 
}

checkForChainsBetweenWithMax = (min, max, maxChain) => {
  let chains = {}
  for (let i = min; i<max; i++) {
    let chain = checkForChainUpTo(i, maxChain)
    if (chain > 2) {
      chains[i] = chain
    }
  }
  return chains
}

console.log(checkForChainsBetweenWithMax(1, 1000000, 100))

// There are a bunch of numbers with a long chain, but 14316 is the smallest. 


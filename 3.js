/**
 * Created by SeamusMartin1 on 3/2/17.
 */
function largestPrimeFactor(number) {
    var primeFactors = [];
    var primesLessThanNumber = primes(number);
    for (h=1; h < primesLessThanNumber.length; h++) {
        if (number % primesLessThanNumber[h] !== 0) {
        } else if (number%primesLessThanNumber[h] === 0) {
            primeFactors.push(primesLessThanNumber[h]);
        }
    }
    return(primesLessThanNumber);
}

console.log(largestPrimeFactor(600851475143));
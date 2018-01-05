/**
 * Created by SeamusMartin1 on 3/6/17.
 */
primesUnder2milsum = 0;
primesUnder2mil = sieve(2000000); // this only works when the sieve is looped multiple times. This is a very, very, slow
    for (i = 0; i < primesUnder2mil.length; i++) {      // process and could do to be optimized dramatically.
        primesUnder2milsum = primesUnder2mil[i] + primesUnder2milsum;
    }
console.log(primesUnder2milsum);
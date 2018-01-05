/**
 * Created by SeamusMartin1 on 3/3/17.
 */
sieveNums = sieve(110000);

 for (i = 0; i < sieveNums.length; i++) {
    for (k = 7; k < (sieveNums[i]/10); k++) {
       if (sieveNums[i] % k === 0) {
           sieveNums.splice(i, 1);
       }
    }
}
console.log(sieveNums);
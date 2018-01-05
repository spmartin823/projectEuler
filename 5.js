/**
 * Created by SeamusMartin1 on 3/2/17.
 */
divisibleByFirstTwenty = [];

for (j=0; j<1000000000; j++){
    if (j%11 === 0 && j%13 === 0 && j % 14 === 0 && // don't need below 10 because if a number is divisible by 2n, it is
        j%16 === 0 && j%17 === 0 && j % 18 === 0 && // also divisible by n. Don't need 12 and 15, because any number
        j%19 === 0 && j%20 === 0) {     // divisible by 20 (5*4) and 18 (6*3) is also divisible by 12 (4*3) and 15 (5*3)
        divisibleByFirstTwenty.push(j);
    }
}
console.log(divisibleByFirstTwenty);
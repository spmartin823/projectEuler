/**
 * Created by SeamusMartin1 on 3/3/17.
 */
sumFirstHundred = 0;
for (i=1; i<=100; i++) {sumFirstHundred = i + sumFirstHundred;}
sumFirstHundredSquared = Math.pow(Number(sumFirstHundred), 2); /*this gives you 25502500, which is the (sum of the first
100 numbers)^2. The next part is intended to give the square of each number, summed. */

squareFirstHundredSum = 0;
for (i=1; i<=100; i++) {
    squareFirstHundredSum = Math.pow(i, 2) + squareFirstHundredSum;
}

 dif = sumFirstHundredSquared - squareFirstHundredSum;

console.log(dif);
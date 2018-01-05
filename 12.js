/**
 * Created by SeamusMartin1 on 3/7/17.
 */
triangularNumbers = [];
for (i = 1; i < 15000; i++) {
    triNumber = 0;
    for (j = 0; j <= i; j++) {
        triNumber = Number(j) + Number(triNumber);
    }
    triangularNumbers.push(triNumber);  // this creates an arbitrary amount of triangular numbers ^.
}
triNumberDivisorsCount = [];
for (h = 1; h < triangularNumbers.length; h++) {
    tempTriNumber = triangularNumbers[h];
    triNumberDivisorsCount[h] = 1;
    for (k = 0; k < tempTriNumber; k++) {
        if (tempTriNumber % k === 0) {
            triNumberDivisorsCount[h] = triNumberDivisorsCount[h] + 1;
        }
    }
}
indexOfGreater = [];
for (j = 1; j < triNumberDivisorsCount.length; j++) {
    if (triNumberDivisorsCount[j] > 500) {
        indexOfGreater.push(j);
    }
}
console.log(triangularNumbers);
console.log(indexOfGreater);

// this takes forever to load. The indexOf() is 12374, which has a value of 76576500. Index 14398 also is also divisible
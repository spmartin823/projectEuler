/**
 * Created by SeamusMartin1 on 3/6/17.
 */
answerArr = [];

for (c = -1000; c<=1000; c++) {             // This column of for loops checks every combination of a, b, and c between
    for (a = -1000; a < 1000; a++) {        // -1000 and 1000. Technically there is a set of negative values that will
        for (b = -1000; b < 1000; b++) {    // make the required triplet true as well.
            if (Math.pow(b, 2) + Math.pow(a, 2) == Math.pow(c, 2) && a + b + c == 1000) { // checks if triplet, and if
                answerArr.push(a * b * c);                                                // whether a + b + c = 1000
            }
        }
    }
}
console.log(answerArr);
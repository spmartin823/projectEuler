/**
 * Created by SeamusMartin1 on 3/8/17.
 */
function collatzSequence(highestStartNum) { // this function gives the collatz sequence given the starting number. https://en.wikipedia.org/wiki/Collatz_conjecture
    arrOfLengths = [];
    for (i = 0; i<=highestStartNum; i++) {
        startNum = i;
        var outputArr = [startNum];
        arrOfLengths[startNum] = 0;
        for (i = 0; i < 10000; i++) {
            if (outputArr[i] > 1) { // checks that there are still more numbers to add
                if (outputArr[i] % 2 === 0) { // if even...
                    outputArr[i + 1] = outputArr[i] / 2; // defines next number using current if even
                    arrOfLengths[startNum] = arrOfLengths[startNum] + 1;
                } else if (outputArr[i] % 2 !== 0) { // if odd..
                    outputArr[i + 1] = (3 * outputArr[i] + 1) / 2;// defines next number using current if odd divide by 2 right away because it will always be even.
                    arrOfLengths[startNum] = arrOfLengths[startNum] + 2
                }
            }
        }
    }
    return arrOfLengths;
}
console.log(collatzSequence(50));

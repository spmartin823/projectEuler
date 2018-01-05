/**
 * Created by SeamusMartin1 on 2/27/17.
 */

function sumOfMultiples(top) {
    var multiples = [];
    for (i = 0; i < top; i++) {
        if (i % 3 === 0) {
            multiples.push(i);
        } else if (i % 5 === 0) multiples.push(i);
    }
    var sum = multiples.reduce(function(a, b) {
        return a + b;
    }, 0);
    return sum;
}
console.log(sumOfMultiples(1000));

console.log('submit test');
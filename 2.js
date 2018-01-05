/**
 * Created by SeamusMartin1 on 2/27/17.
 */
function fibEvenSum(terms,top) {
    var fibSequenceComplete = [1, 2];
    var fibSequenceCompleteEven = [];
    var fibSequenceCompleteEvenUnderTop = [];
    for (i=2; i < terms; i++) {
        fibSequenceComplete[i] = fibSequenceComplete[i - 2] + fibSequenceComplete[i - 1];
        fibSequenceComplete.push(fibSequenceComplete[i]);
    }

    for (j=0; j<terms; j++) {
        if (fibSequenceComplete[j]%2 === 0) {
            fibSequenceCompleteEven.push(fibSequenceComplete[j]);
        }
    }
    for (k=0; k<terms; k++) {
        if (fibSequenceCompleteEven[k] <= top) {
            fibSequenceCompleteEvenUnderTop.push(fibSequenceCompleteEven[k])
        }
    }
    var sum = fibSequenceCompleteEvenUnderTop.reduce(function(a, b) {
        return a + b;
    }, 0);
    return sum;
}
console.log(fibEvenSum(400,4000000));
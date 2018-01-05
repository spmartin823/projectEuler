/**
 * Created by SeamusMartin1 on 3/4/17.
 * Does not work because Javascript can't handle numbers like this
 */
terms = 10000; //put the number of terms you want
digits = [];
fibSequence = [1, 1, 2];
for (i=3; i < terms; i++) {
    fibSequence[i] = fibSequence[i - 2] + fibSequence[i - 1];
    fibSequence.push(fibSequence[i]);
}
console.log(fibSequence);
function getDigits(number) {
    return number.BigInteger.toString().length;
}
for (i=0; i < fibSequence.length; i++) {
    digits.push(getDigits(fibSequence[i]));
}
console.log(digits);
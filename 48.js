
var BigNumber = require('bignumber.js');

BigNumber.config({EXPONENTIAL_AT : [-7 , 3050]}) 

let sum = 0 
for (let i = 1; i <= 1000; i++) {
  let num = new BigNumber(i)
  let power = BigNumber(num.pow(num))
  let firstTen = Number(power.toString().split('').reverse().slice(0, 10).reverse().join(''))
  console.log(i, power.toString(), firstTen)
  sum += firstTen
}
console.log(sum.toString().split('').reverse().slice(0,10).reverse().join('')) // get first ten
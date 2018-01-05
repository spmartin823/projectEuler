// An irrational decimal fraction is created by concatenating the positive integers:
// 0.123456789101112131415161718192021...
// It can be seen that the 12th digit of the fractional part is 1.
// If dn represents the nth digit of the fractional part, find the value of the following expression.
// d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000




let createXDigitConcatString = (len) => {
  let digits = ''
  i = 1
  while (digits.length < len) {
    digits += i.toString()
    i++
  }
  return digits
}

// console.log(createXDigitConcatString(1000000))

let multiply = () => {
  let str = '0' + createXDigitConcatString(1000000)
  return str[1] * str[10] * str[100] * str[1000] * str[10000] * str[100000] * str[1000000]
}

console.log(multiply())
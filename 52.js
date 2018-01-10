// It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits,
// but in a different order.

// Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.



let getDigits = (num) => num.toString().split('')

let checkEquality = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      return false
    }
  }
  return true;
} 



let findMultiples = (min, max) => {
  let multiples = [1,2,3,4,5,6]
  for (let i = min; i < max; i++) {
    if ((i * 6).toString().length === i.toString().length) {
      let combos = multiples.map(e => getDigits(e * i).sort().join(''))
      if (checkEquality(combos)) {return i}
    }
  }
  console.log('no multiples')
}

console.log(findMultiples(1, 20000000))
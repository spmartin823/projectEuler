// correct

// If p is the perimeter of a right angle triangle with integral length sides, 
// {a,b,c}, there are exactly three solutions for p = 120.
// {20,48,52}, {24,45,51}, {30,40,50}
// For which value of p ≤ 1000, is the number of solutions maximised?


let isValidTrio = (a, b, c) => a + b > c && (a ** 2) + (b ** 2) === (c ** 2)   

let findIndexOfMax = (arr) => arr.reduce((acc, el, i) => el !== undefined && el > arr[acc] ? i : acc, 0)

let getMaxSolutionCountUpToGivenP = (p) => {
  let maxCLength = Math.ceil(p/2)
  let solutionArr = new Array(p).fill(0).slice()
  for (let c = 1; c <= maxCLength; c++) {
    c2 = c ** 2
    for (let a = 1; a < c; a++) {
      for (let b = 1; (b ** 2) <= (c ** 2) - (a ** 2); b++) {
        if (isValidTrio(a, b, c)) {
          console.log(a,b,c, 'is valid')
          solutionArr[a + b + c] += 1
        }
      }
    } 
  }
  return findIndexOfMax(solutionArr)
} 

console.log(getMaxSolutionCountUpToGivenP(1000))
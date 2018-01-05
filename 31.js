function coinSums (total) {
  var coins = [1,2,5,10,20,50,100,200];
  let count = 0
  let recurse = (sum = 0, index = 0) => {
    if (sum === total) {count++} 
    else if (sum < total) {
      for (let i = index; i < coins.length; i++) {
        if (sum + coins[i] <= total) {
          recurse(sum + coins[i], i)
        }
      }
    }
  }
  recurse()
  return count;
}

console.log(coinSums(200))
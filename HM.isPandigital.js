let isPandigital = (num) => {
  num = num.toString().split('').map(e => parseInt(e))
  for (let i = 1; i < num.length; i++) {
    console.log(num)
    if (!num.includes(i)) {
      return false 
    }
  }
  return true
}

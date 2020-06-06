function getFlippedNumber(n) {
  return Number(String(n).split('').reverse().join(''))
}

function isPalindrome(n) {
  return String(n) === String(n).split('').reverse().join('');
}

function isLychrel(n) {
  let sum = n + getFlippedNumber(n);
  for (let i = 0; i < 50; i++) {
    if (sum === Number.MAX_SAFE_INTEGER) {
      console.log('javascript is too small for this problem');
    }

    if (isPalindrome(sum)) {
      return false;
    }
    sum = sum + getFlippedNumber(sum);
  }
  return true;
}

function range(start, end) {
  const ret = [];
  while (start <= end) {
    ret.push(start);
    start++
  }
  return ret;
}

console.log(range(1, 10000).filter(isLychrel).length);

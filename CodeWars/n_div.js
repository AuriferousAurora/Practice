function isDivisible(n, x, y) {
  // Return boolean representing divisibility of n by x and y
  // All inputs are positive, non-zero integers
  let iX = n % x ? false : true;
  let iY = n % y ? false : true;
  return iX && iY;
}

console.log(isDivisible(3, 1, 3));
console.log(isDivisible(12, 2, 6));
console.log(isDivisible(100, 5, 3));
console.log(isDivisible(12, 7, 5));
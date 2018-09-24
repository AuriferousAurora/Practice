const binary = function (n) {
  let array = [];
  // For whatever the value of the argument, this for loop creates an array composed of zeroes with a length equal to the length of the number in binary.
  for (let i = 1; i <= n; i *= 2) { array.unshift(0); } 
  // So far, all this does is check to see if the first index in the array ought to be a one.
  for (let i = 0; i < array.length; i++) {
    if (n >= (Math.pow(2, (array.length - 1) ))) { array[0] = 1; }
  }
  // And then it returns the array.
  return array;
}

console.log((binary(17)));

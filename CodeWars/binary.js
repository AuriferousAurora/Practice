function addBinary(a,b) {
let array = [];
let sum = a + b;
for (let i = 1; i <= sum; i *= 2) { array.unshift(0); }
let temp = sum;
for (let i = 0; i <= array.length; i++) {
  console.log('Current temp: ' + temp);
  let expo = array.length - 1 - i;
  let result = (Math.pow(2, expo));
  console.log('Current result: ' + result);
  if (temp >= result) {
    array[i] = 1;
    temp -= result;
  }
  let string = array.join('');
  return string;
}
}

console.log(addBinary(1, 2));

// After sumbitting this, the solutions informed me of the utility of Object.prototype.toString(2). So, yeah...
const a = range(1, 10);

function range(start, end) {
  return [...Array(end).keys()].map(i => i + start);
}

function sumRange (array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function stepRange (start = 0, end, step = 1) {
  let array = [];
  if (step >= 1) {
    for (let i = start; i <= end; i += step) { array.push(i); }
  } else { 
    for (let i = start; i >= end; i += step) { array.push(i);} }
  return array;
}

function reverseArray (array) {
  let newArray = [];
  for (let i = array[0]; i < array.length + 1; i++) { newArray.unshift(i); }
  return newArray;
}

function reverseArrayInPlace (array) {
  let half = Math.floor(array.length / 2);
  for (let i = 0; i < half; i++) {
    let first = array[i];
    let second = array[array.length - 1 - i];
    array[i] = second;
    array[array.length - 1 - i] = first;
  }
  return array;
}

let a2 = [1, 2, 3];
function arrayToList (array) {
  let n = [];
  for (let i = array[0]; i < array.length + 1; i++) { n.unshift(i); }
  let prev = null;
  for (let i = 0; i < n.length; i++) {
    let obj = { value: n[i], rest: prev }
    if(i != n.length - 1) { prev = obj; } else { return obj; }
  }
}

// This is the list used in all of the below functions.
const l1 = arrayToList(a2);

function listToArray(list) {
  let temp = list;
  let array = [];
  while (true) {
    array.push(temp.value);
    if (temp.rest === null) { break; } 
    temp = temp.rest;
  }
  return array;
}

function prepend (elem, list) {
  let newList = { value: elem, rest: list };
  return newList;
}
// This version breaks if the number is greater than the largest number in the list.
function nth (list, n) {
  let temp = list;
  while (temp.value < n) { temp = temp.rest; }
  return temp;
}

// Recursive version. This one fixes the issue in the above version.

function nthRecursive (list, n) {
  if (n === 0) { return list.value;
  } else if (list.rest === null) { return 'Invalid index.';
  } else { return nthRecursive(list.rest, n - 1); }
}

// Object equivalence function. Compares objects based on properties instead of identity.

function deepEqual (a, b) {
  // Checks whether paramaters are equal. If false, control passes to next line.
  if (a === b) return true;
  // Checks whether either parameter is equal to null or not an object. If false, controle pases to next line.
  if (a === null || typeof(a) != 'object' || b === null || typeof(b) != 'object') return false;
  // Uses Object.keys() to create and array (or array-like) containing each top-level key in the parameter object.
  const pA = Object.keys(a), pB = Object.keys(b);
  // Checks to see if length of top-level property arrays are equal.
  if (pA.length != pB.length) return false;
  // Verifies that every key in the first object exists in the second object. If not, returns false.
  for (let prop of pA) { 
    if(b.hasOwnProperty(prop)) {
      if (!deepEqual(a[prop], b[prop])) { return false; }
    } else { return false; }
  } return true;
}

let o1 = { here: { is: 'a' }, object: 2};
let o2 = { here: { is: 'an' }, object: 2};

console.log(deepEqual(o1, o2));







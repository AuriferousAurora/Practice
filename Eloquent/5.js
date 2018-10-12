import scripts from './scripts'

let arrays = [[1, 2, 3], [4, 5], [6]];

arrays.reduce( (a, c) => a.concat(c), []);

// Your own loop. First try.

function loop (value, testFunc, updateFunc, bodyFunc) {
  let test = value;
  while (testFunc(test)) {
    bodyFunc(test);
    test = updateFunc(test);
  }
}

// FC
// loop(3, n => n > 0, n => n - 1, console.log);

// After looking at solution (since a typical for loop establishes a variable that is updated throughout the cycle of the loop, then establishes a condition upon which the loop should be terminated [while loop] and then an update condition).

function loop2 (value, testFunc, updateFunc, bodyFunc) {
  for ( let i = value; testFunc(i); i = updateFunc(i) ) { bodyFunc(i); }
}

// FC
// loop2(3, n => n > 0, n => n -1, console.log);

// Everything.

// function every ( array, testFunc ) {
//   for (let index of array) {
//     if (!testFunc(index)) return false;
//   }
//   return true;
// }



console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

console.log(SCRIPTS[0]);

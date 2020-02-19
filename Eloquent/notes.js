// As I can gather, there exist three kinds of code in JavaScript.

// The first of these is a declaration. A declaration is a variable declaration. In this you bind a value to a variable. The three declartive code words are 'var', 'let', and 'const'; however, there is no good reason to use var except in dealing with legacy code.

// The second kind of code in JavaScript is a statement. A statement is immutable. You cannot redefine the word 'if' in JavaScript to mean something else, since it is integral to control flow and thus a protected word in the language. A statment performs an action.

// The third and final kind of code is an expression. An expression is code that returns a value. It can be said to stand in for something. While a variable declaration could be considered an expression since it is not an protected section of the language, a better example would be a function. You can use a function as a parameter in another function, because it will evaluate to a value of some kind that can be used in the higher-order function. You can't use an 'if' statement as a parameter in a function.

// ========================= //

// Defining a Symbol and attaching it to a variable allows for a string with an entirely unique identity to be created. This allows for the definining of strings that are prototypal properties without overriding said property value.
const toString = Symbol('toString');
Array.prototype[toString] = function () {
  return `${this.length} cm of blue yarn`;
};

// It seems like Symbols are invoked with bracket notation. This is so that when the code is run, the code inside the bracket is evaluated and returns with its bound value, the Symbol. You can use this to set an object property name to a symbol as well.

// console.log([1, 2].toString());
// console.log([1, 2][toString]());

// Next up, I'm going to take some time to explore the concept of the iterator symbol. Doing so has lead me to realize that I do not fully understand (or at all understand) the 'yield' keyword or the concept of a generator function (I think 'function*' might be the binding for that bit of funcitonality currently and that there is also deprecated or legacy code that accomplishes a similar thing based on the associated MDN article).

function* gen () {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g; // Object [Generator] {}
g.next(); // Object { value: 1, done: false }
g.next(); // Object { value: 2, done: false }
g.next(); // Object { value: 3, done: false }
g.next(); // Object { value: undefined, done: true }

function* gen2 () {
  while (true) {
    console.log();
  }
}

const g2 = gen2();

// Keep removing and rearranding and readding the console.log statements. The answer is somewhere in here.
console.log(g2.next(1)); // { value: null, done: false }
console.log(g2.next(2)); // 2 // { value: null, done: false }

function* foo(index) {
  while (index < 2) {
    yield index++;
  }
}

const iterator = foo(0);

// console.log(iterator.next().value);
// // expected output: 0

// console.log(iterator.next().value);
// // expected output: 1

// console.log('//////////////////');

// function* test () {
// }

// const g3 = test();
// console.log(g3.next());
// console.log(g3.next());





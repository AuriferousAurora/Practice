// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// This property is set on the global object
a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'

function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as 
// arguments in the function call
add.call(o, 5, 7); // 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 34

// ======================================================== //
// The bind method.

function f() {
  return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind only works once!
console.log(h()); // azerty

var o = {a: 37, f: f, g: g, h: h};
console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty

console.log('=================================');

// Arrow function and 'this'.

var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true

// Call as a method of an object
var obj = {func: foo};
console.log(obj.func() === globalObject); // true

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
foo = foo.bind(obj);
console.log(foo() === globalObject); // true

// This is from that reddit post about decoarting the console with CSS.

var o = "font-family: Helvetica, Arial, sans-serif"
  , r = o + "; font-size: 32px; line-height: 1.5; color: #fff"
  , a = r + "; background-color: #000; padding: 4px 14px"
  , s = r + "; background-color: #bb1919; padding: 4px 220px 4px 0"
  , l = o + "; font-size: 14px; line-height: 1.15rem"
  , c = l + "; text-decoration: underline"
  , u = "";

window.console.log("\n%cB%c %cB%c %cC%c %c NEWS\n%c\n%cHi there! Do you want to help build a fast and accessible web experience used\nby over 300 million people around the world each month? We're hiring people for\nall sorts of roles. Head on over to %chttps://bbc-news.github.io/join-us/%c to find out more!\n", a, u, a, u, a, u, s, u, l, c, l)
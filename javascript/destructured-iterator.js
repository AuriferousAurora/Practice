function* fibonacci() {
  let a = 0;
  let b = 1;
  while(true) {
    yield a;
    [a, b] = [b, a + b]
  }
}

let [first, second, third, fourth, fifth, sixth] = fibonacci();
console.log(sixth);
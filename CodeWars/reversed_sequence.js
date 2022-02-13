// Build a function that returns an array of integers from n to 1 where n>0.

// Example: n=5 --> [5,4,3,2,1]


const reverseSeq = n => {
    let x = n - 1;
    let r = [n];
    while (x > 0) {
        r.push(x);
        x = x - 1;
    }
    return r;
  };

console.log(reverseSeq(5));
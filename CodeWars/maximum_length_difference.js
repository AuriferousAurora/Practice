const a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

function maxDiffLength(a1, a2) {
  if (!a1[0] || !a2[0]) return -1;
  const longest = (array) => {
    const reducer = (accumulator, current_value) => { return (accumulator.length > current_value.length) ? accumulator : current_value }
    return array.reduce(reducer);
  }
  const shortest = (array) => {
    const reducer = (accumulator, current_value) => { return (accumulator.length < current_value.length) ? accumulator : current_value }
    return array.reduce(reducer);
  }
  const l1 = longest(a1).length;
  const l2 = longest(a2).length;

  if (l1 > l2) return l1 - shortest(a2).length;
  if (l1 < l2) return l2 - shortest(a1).length;
}

console.log(maxDiffLength(a1, a2));

// ! I don't think this is working, so I may come back to it.
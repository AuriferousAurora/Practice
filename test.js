let s = ("bitcoin take over the world maybe who knows perhaps");

function findShort(s){
  const arr = s.split(' ');
  const testShortest = (a, b) => { if (a.length < b.length) { return a } else { return b }}
  const shortest = arr.reduce(testShortest);
  return shortest.length
}

console.log(findShort(s));
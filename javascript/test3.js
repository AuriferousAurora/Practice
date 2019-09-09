function range (start, stop) {
  let result = [];
  for (let i = start; i <= stop; i++) { result.push(i); }
  return result;
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;



console.log(range(1, 100).reduce(reducer));
function doubling(base, days) {
  let totalAmount = 0;
  let previousAmount = base;
  for(let i = 1; i < days; i++) {
    let newAmount = previousAmount * 2
    console.log(newAmount);
    previousAmount = newAmount
    totalAmount += newAmount
  }
  return totalAmount;
}

console.log(doubling(1000, 30));
function increment(y) {
  // assument everything passed is 'numeric'
  if (y == 0) {
    return 1; 
  } else if (y % 2 > 0) {
    return 2 * Math.round(y/2);
  } else return y + 1;
}

console.log(increment(5));
console.log(increment(5.5));

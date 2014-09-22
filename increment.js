function increment(y) {
  // assument everything passed is 'numeric'
  if (y == 0) {
    return 1; 
  } else if (y % 2 > 0) {
    console.log(y);
    return 2 * increment(y/2);
  } else return y + 1;
}

console.log(increment(5));

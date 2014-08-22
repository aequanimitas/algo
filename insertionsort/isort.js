function isort(arr, log, fn_order) {
  log(fn_order.name);
  log(fn_order(arr));
  log("\n");
}

function ascending(arr) {
  for (var ct = 0; ct < arr.length; ct += 1) {
    swap_til_it_drops(arr,ct,increment(ct),decrement);
  }
  return arr;
}

function descending(arr) {
  for (var ct = arr.length; ct >= 0; ct -= 1) {
    swap_til_it_drops(arr,ct,decrement(ct),increment);
  } 
  return arr;
}

function increment(x) {
  return x + 1;
}

function decrement(x) {
  return x - 1;
}

function swap_til_it_drops(arr, i, j, next) {
  if ((i >= 0) && (arr[i] > arr[j])) {
    var k = arr[j]
    arr[j] = arr[i];
    arr[i] = k;
    swap_til_it_drops(arr, next(i), next(j), next);
  } else {
    return arr;
  }
}

console.log([219,132,99,102,88,103]);
console.log("\n");
isort([219,132,99,102,88,103], console.log, ascending);
isort([219,132,99,102,88,103], console.log, descending);

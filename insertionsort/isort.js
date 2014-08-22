function isort(arr, log, fn_order) {
  log(fn_order.name);
  log(fn_order(arr));
  log("\n");
}

function ascending(arr) {
  var j, i, k = 0;
  for (var ct = 0; ct < arr.length; ct += 1) {
    j = ct + 1;
    i = ct;
    swap_til_it_drops(arr,i,j,decrement);
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

function descending(arr) {
  var i,j,k = 0;
  for (var ct = arr.length; ct >= 0; ct -= 1) {
    j = ct - 1;
    i = ct;
    swap_til_it_drops(arr,i,j,increment);
  } 
  return arr;
}

console.log([219,132,99,102,88,103]);

isort([219,132,99,102,88,103], console.log, ascending);
isort([219,132,99,102,88,103], console.log, descending);



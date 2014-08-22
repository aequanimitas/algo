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
    while ((i >= 0) && (arr[i] > arr[j])) {
      k = arr[j];
      arr[j] = arr[i];
      arr[i] = k;
      i -= 1;
      j -= 1;
    }
  }
  return arr;
}

function descending(arr) {
  var i,j,k = 0;
  for (var ct = arr.length; ct >= 0; ct -= 1) {
    j = ct - 1;
    i = ct;
    while ((i >= 0) && (arr[i] > arr[j])) {
      k = arr[j];
      arr[j] = arr[i];
      arr[i] = k;
      i -= 1;
      j -= 1;
    }
  } 
  return arr;
}

console.log([219,132,99,102,88,103]);

isort([219,132,99,102,88,103], console.log, ascending);
isort([219,132,99,102,88,103], console.log, descending);



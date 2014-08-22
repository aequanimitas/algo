function isort(arr, log) {
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
  log(arr);
}

isort([219,132,99,102,88,103], console.log);



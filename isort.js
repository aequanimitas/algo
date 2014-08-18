function isort(arr) {
  var i = 0,
      key = 0,
      eval_count = 0;
  for (var j = 0; j < arr.length; j += 1) {
    key = arr[j];
    i = j - 1;
    eval_count += 1;
    while (i >= 0 && arr[i] > key) {
      console.log("inside loop using while, current arr structure: " + arr);
      arr[i + 1] = arr[i];
      i -= 1;
      eval_count += 1;
      console.log("Key: " + key);
    }
    arr[i + 1] = key;
  }
  console.log("eval count: " + eval_count);
  return arr;
}

var ar = isort([9,5,3,7,6,"K"]);
console.log(ar);

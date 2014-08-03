function peak(arr) {
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }
  var mid = parseInt(arr.length / 2);
  if (arr[mid] < arr[mid - 1]) {
    return peak(arr.slice(0, mid-1))
  } else if (arr[mid] < arr[mid + 1]) { 
    return peak(arr.slice(mid, arr.len));
  } else {
    return arr[0]
  }
}

var lolarr = [];

for (var x = 0; x < 1000000; x += 1) {
  lolarr.push(x);
}
var starttime = +Date.now();
console.log(peak(lolarr));
var endtime = +Date.now();
console.log(endtime - starttime);

var substruct_size_limit = 2,
      left_side = 0,
      right_side = 1,
      operation_counter = 0;

     
function peak(arr){
  return finder(arr);
}

function finder(arr) {
  operation_counter += 1;
  var mid = arr.length / 2,
      mid_to_the_left = mid - 1,
      mid_to_the_right = mid + 1;
    if (arr.length === substruct_size_limit) {
      return arr[left_side] > arr[right_side] ? arr[left_side] : arr[right_side];
    }
    var mid = parseInt(arr.length / 2);
    if (arr[mid] < arr[mid - 1]) {
      return finder(arr.slice(0, mid - 1))
    } else if (arr[mid] < arr[mid + 1]) { 
      return finder(arr.slice(mid, arr.len));
    } else {
      return arr[left_side]
    }
}
var lolarr = [];

for (var x = 0; x < 1000000; x += 1) {
  lolarr.push(x);
}
var starttime = +Date.now();
console.log(peak(lolarr));
var endtime = +Date.now();
console.log('Time took: ' + ((endtime - starttime) / 100) + ' seconds');
console.log('Array sorted with length of: ' + lolarr.length);


console.log("Operation Counter: " + operation_counter);
operation_counter = 0;
console.log("Directly call finder fn");
var new_starttime = +Date.now();
console.log(finder(lolarr))
var new_endtime = +Date.now();

console.log("Operation Counter: " + operation_counter);
console.log('Time took: ' + ((new_endtime - new_starttime) / 100) + ' seconds');

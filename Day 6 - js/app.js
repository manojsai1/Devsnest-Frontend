// question 1 :
function is_array(inp) {
  if (Array.isArray(inp)) {
    return true;
  }
  return false;
}

console.log(is_array([7, 4]));

// question 2
function array_clone(arr) {
  let secondarr = arr;
  return secondarr;
}

console.log(clone([9, 8, 4]));

//question 3

var first = function (array, n) {
  if (array == null) return void 0;
  if (n == null) return array[0];
  if (n < 0) return [];
  return array.slice(0, n);
};

console.log(first([7, 9, 0, -2], -3));

//question 4
function joinstr(arr) {
  str = arr.join(" ");
  console.log(str);
}

joinstr(["This", "Dk", "!!!"]);

//question 5
count = 0;
max = 0;
function joinstr(arr) {
  arr.map((ele) => {
    arr.map((ble) => {
      if (ele == ble) {
        count++;
      }
    });
    if (count > max) {
      max = count;
    }
    count = 0;
  });
  console.log(max);
}

joinstr([0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 32, 3, 4, 5, 2, 2]);

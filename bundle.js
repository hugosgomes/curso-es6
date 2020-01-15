"use strict";

var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item, index) {
  return item + index;
});
var sum = arr.reduce(function (total, next) {
  return total + next;
});
var filter = arr.filter(function name(item) {
  return item % 2 === 0;
});
var find = arr.find(function name(item) {
  return item === 4;
});
console.log(newArr);
console.log(sum);
console.log(filter);
console.log(find);

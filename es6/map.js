<<<<<<< HEAD
// 遍历原数组， 生成新数组
var originalArr = [1,2,3,4,5];
// var newArr = originalArr.map(item => {
//   return item*3
// });
// console.log(newArr);

// step 1
// var newArr = [];
// for(var i =0; i < originalArr.length; i++) {
//   newArr[i] = originalArr[i]*3;
// }
// console.log(newArr);

//step2 抽象成一个函数
// function multiplyByThree(arr) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i]*3;
//   }
//   return newArr;
// }

// var arrTransformed = multiplyByThree(originalArr);
// console.log(arrTransformed);

// step2 对每一个元素乘3抽象成一个新的函数
// function timesThree(item) {
//   return item*3;
// }

// function multiplyByThree(arr) {
//   var newArr = [];
//   for (var i =0; i < arr.length; i++) {
//     newArr[i] = timesThree(arr[i]);
//   }
//   return newArr;
// }

// var arrTransformed = multiplyByThree(originalArr);
// console.log(arrTransformed);

// *3 *5 ....所以将执行函数作为参数传入
// 要传5怎么办/
// 重命名就是更加适应需求 step 3
// function timesFive(item) {
//   return item*5;
// }

// function multiply(arr, multiplyFunction) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     newArr[i] = multiplyFunction(arr[i]);
//   }
//   return newArr;
// }

// console.log(multiply(originalArr, timesFive));

// step4 匹配每个项， 并应用函数， 返回新的数组
// map 匹配    transform 加上
// function map(arr, transform) {
//   var newArr = [];

//   for (var i = 0; i < arr.length; i++) {
//     newArr[i] = transform(arr[i]);
//   }

//   return newArr;
// }
// function makeUpperCase(str) {
//   return str.toUpperCase();
// }
// var arr = ['abc', 'def', 'ghi'];
// var newArr = map(arr, makeUpperCase);
// console.log(newArr);

//step 5  数组不做为第一个参数传入， 在左侧， 还有index索引
// 多传参
// function map(arr, transform) {
//   var newArr = [];

//   for (var i = 0; i < arr.length; i++) {
//     newArr[i] = transform(arr[i], i, arr);
//   }

//   return newArr;
// }

// function logAll(item, index, arr) {
//   console.log(item, index, arr);
//   return item;
// }
// console.log(map(originalArr, logAll));

Array.prototype.map = function(fn) {
  var newArr = [];
  for(var i = 0; i < this.length; i++) {
    // console.log(fn(this[i]));
    newArr.push(fn(this[i], i, this));
  }
  return newArr;
}
console.log(originalArr.map(function(item) {
  return item*3;
}));
=======
// 如何手动实现
// Array.prototype.map
var originArr = [1,2,3,4,5];
// var newArr = originArr.map(item => {
//   return item*3;
// })
// console.log(newArr);
// 手动实现 es6 -> es5 手写
// 闭包，高阶函数  作用域
// var newArr = [];
// for (var i =0,
//    len = originArr.length;
//     i < len; i++) {
//   newArr.push(originArr[i]*3);
// }
// // 顺序流程化具象解决问题
// console.log(newArr);

// step2 封装函数
// 一个数组 每一项都3times 
// 并且返回新的数组 
// function multiplyByThree(arr) {
//   var newArr = [];
//   for (var i =0;i<arr.length;i++) {
//     newArr.push(arr[i]*3);
//   }
//   return newArr;
// }
// console.log(
//   multiplyByThree(originArr));
// //step3 将具象的东西拿掉 *5 怎么办？
// // 数组 字符串数组， 小写变成大写？
// function timesThree(item) {
//   return item*3;
// }
// function timesFive(item) {
//   return item*5;
// }
// function makeUpperCase(item) {
//   return item.toUpperCase();
// }

// // 高阶函数 函数作为参数，返回值
// function map(arr, fn) {
//   // 函数内部 分几个函数 每个函数只做一件事
//   var newArr = [];
//   for (var i = 0; i < arr.length;i++) {
//     newArr.push(fn(arr[i]))
//   }
//   return newArr;
// }

// console.log(map(originArr, timesFive));
// console.log(map(['a','b', 'c'],
//  makeUpperCase));

Array.prototype.map = function(fn) {
  var newArr = [];
  // console.log(this);
  for (var i=0; i<this.length; i++) {
    newArr.push(fn(this[i], i, this))
  }
  return newArr;
}
var newArr = originArr.map(function(item, index, arr){
  return item*index;
})
console.log(newArr);
>>>>>>> master

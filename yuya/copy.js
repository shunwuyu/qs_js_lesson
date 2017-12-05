// // // 先展示concat
// // var arr1 = [1,2,3];
// // var arr2 = [4,5,6];
// // console.log(arr1.concat(arr2));
// // // concat slice 返回新数组的特性来实现拷贝
// // // 五种基本类型
// // var arr = ['old', 1, true, null, undefined];
// // var new_arr = arr.concat();
// // new_arr[0] = 'new';
// // console.log(new_arr);
// // console.log(arr);

// // 数组的写法
// // slice 使用方法 
// // http://www.w3school.com.cn/jsref/jsref_slice_array.asp
// var arr = new Array(6);
// arr[0] = "George";
// arr[1] = "John";
// arr[2] = "Thomas";
// arr[3] = "James";
// arr[4] = "Adrew";
// arr[5] = "Martin";
// // console.log(arr);
// // console.log(arr.slice(2));
// // // 4不包括的
// // console.log(arr.slice(2, 4));
// // 第一个参数负数从后截取, 也是向后算
// // console.log(arr.slice(-1));
// // console.log(arr.slice(-4,-1));
// // slice 返回新的数组
// // var new_arr = arr.slice();
// // new_arr[0] = '芬芬';
// // console.log(new_arr);
// // console.log(arr);

// var arr = [{old: "old"}, ['old']];
// var new_arr = arr.concat();
// arr[0].old = 'new';
// arr[1][0] = 'new';

// console.log(arr);
// console.log(new_arr);

// JSON的两个方法 
// var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}];
// var new_arr = JSON.parse(JSON.stringify(arr));
// new_arr[3][0] = 'new1';
// console.log(new_arr);
// console.log(arr);
// 函数不行 一般也不会 stringify 有问题
// var arr = [function() {
//   console.log(a);
// }, {
//   b: function() {
//     console.log(b)
//   }
// }];
// // stringify 有问题
// var new_arr = JSON.parse(JSON.stringify(arr));
// console.log(new_arr);

// var shallowCopy = function(obj) {
//   if (typeof obj !== 'object') return;
    // 新对象
//   var newObj = obj instanceof Array ? [] : {};
// 数组或对象都可for key in
//   for (var key in obj) {
    // 自有属性
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] = obj[key];
//     }
//   }

//   return newObj;
// }

// var arr = ['old', 1, true, null, undefined];
// var newArr = shallowCopy(arr);
// newArr[0] = 'new';
// console.log(newArr);
// console.log(arr);
// end 浅拷贝

var deepCopy = function(obj) {
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for ( var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]): obj[key];
    }
  }

  return newObj;
}

var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}];
var newArr = deepCopy(arr);
newArr[3][1] = 'new';
console.log(newArr);
console.log(arr);



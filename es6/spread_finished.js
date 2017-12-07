'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 小吃店 pizza
// 常量 es6 先考虑const  let安全 
// var 基本不用
// 类型不能变,除了基本类型外，值是可变的
// constant variable
// const name = 'ysw';
// name = '松松';
var featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
featured.push('芝士');
// console.log(featured);
// featured = {'haha': '123'};
var specialty = ['Meatzza', 'Spicy Mama', 'Marghrita'];
var pizzas = [].concat(featured, ['veg'], specialty);
console.log(pizzas);

var fridayPizzas = [].concat(_toConsumableArray(pizzas));

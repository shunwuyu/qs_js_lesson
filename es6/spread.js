// 小吃店 pizza
// 常量 es6 先考虑const  let安全 
// var 基本不用
// 类型不能变,除了基本类型外，值是可变的
// constant variable
// const name = 'ysw';
// name = '松松';
const featured = ['Deep Dish',
'Pepperoni', 'Hawaiian'];
featured.push('芝士');
// console.log(featured);
// featured = {'haha': '123'};
const specialty = ['Meatzza',
 'Spicy Mama', 'Marghrita'];
const pizzas = [...featured, 'veg', ...specialty];
console.log(pizzas);

const fridayPizzas = [...pizzas]; 
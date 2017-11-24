// 类式继承 function Person new
// 继承
// 人类 object
var Person = {
  name: 'default name',
  getName: function() {
    return this.name;
  }
} 

// 原型式继承 
// Person object js里没有类 
// 原型对象
function clone(obj) {
  // 闭包
  function F() { }
  // obj原型链对象, 奉献，让基于它的对象，
  // 来它的链上查找方法和属性
  // object
  F.prototype = obj;
  return new F;
}

var gf = clone(Person);
gf.name = '芬芬';
console.log(gf.getName());
// 人类
// 作者也是人 books getBooks


var Author = clone(Person);
Author.books = [];
Author.getBooks = function() {
  return this.books.join(',');
}

var ft = clone(Author);
ft.name = '冯唐';
ft.books = ['十八岁给我一个姑娘',
'万物生长', '北京北京'];
console.log(ft.getBooks());
// js 实现 私有变量， 静态方法 闭包
// var dmy = Person;
// dmy.name = '戴牧阳';
// console.log(dmy.getName());

// var gf = Person;
// console.log(gf.name);
// 继承
function extend(subClass, superClass) {
  // 手术  prototype
  // prototype指向 
  // 空类F  函数就是对象， 类
  var F = function() {}
  F.prototype = superClass.prototype;
  console.log(F.prototype);
  // js 原型链prototype 对象会沿着原型链一直去查找，
  // 自身对象是否有getName方法 , 如果没有，就会
  // 沿着这跟链找其他的结象，是否有方法
  // console.log(subClass.prototype.constructor);
  subClass.prototype = new F();
  // console.log(subClass.prototype.constructor);
  // 构造函数 subClass
  // constructor属性 对象完全是由prototype来指挥
  subClass.prototype.constructor = subClass;
  // console.log(subClass.prototype.constructor);
  // 静态属性
  subClass.superclass = superClass.prototype ;
}

// 人类
// Person 即是函数, 构造函数
// 函数是对等的一种，即可执行的对象
// 一等对象 上天入地， 
// 表达式 var a = function() { }
// 高阶函数 形参 function func(cb) { cb();}
// 返回值 返回一个函数 
// 基类
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
}

// var ysw = new Person('喻顺武');
// console.log(ysw.getName());
// 子类
function Author(name, books) {
  // 借
  // author类得到属性设置
  // this -> author 对象指向 
  Person.call(this, name);
  this.books = books;
} 
// Author.prototype.getName = function(){
//     return Person.prototype.getName.call(this);
// }
// Person prototype 方法， 它都得有，
// Person 的构造函数不能被改掉
extend(Author, Person);

Author.prototype.getBooks = function() {
  return this.books.join(',');
}

var xnz = new Author('倪子红', 
['我知道的JS', 'JS红学', '小倪子模式']
);
console.log(xnz.getName());
console.log(xnz.getBooks());


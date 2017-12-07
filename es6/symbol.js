// 唯一性  动态语言
// let wxb = {
//   trueLove: '双儿'
// };

// wxb.trueLove = '阿珂';
// wxb.trueLove = '苏荃';
// wxb.trueLove = '沐剑屏';
// wxb.trueLove = '建宁公主';
// wxb.trueLove = '曾柔';

// 每一位在爵爷心理都是独特的，js 表达唯一比较难
// https://zhuanlan.zhihu.com/p/29437556
// Symbol  六种类型之一 基础类型
let shaunger = Symbol('');
let ake = Symbol('');
let sq = Symbol('');
let mjp = Symbol('');
let jn = Symbol('');
let zr = Symbol('曾柔');
console.log(zr == mjp); //唯一的， 不会一样
let wxb = {
  // [变量]
  name: '韦小宝',
  [shaunger]: '最爱',
  [ake]: '最爱',
  // ....
}



console.log(wxb[shaunger]);

let name = Symbol('name'); //desc 跟踪
let max = Symbol();
let obj = {
  [name]: 'icepy',
  [max]: 29
}
// symbol
console.log(typeof max);
for(let key in wxb) {
  console.log(key, wxb[key]);
}

const symbols = Object.getOwnPropertySymbols(wxb);
for (symbol of symbols) {
  console.log(symbol);
}

// 全局设置
var globalFooSymbol = Symbol.for('foo');
console.log(Symbol.keyFor(globalFooSymbol));

// JavaScript 内部逻辑
// 判断数组类型
let f = [1,2,3];
// 尽然不是array, 而是object
console.log(typeof f);
// [object Array]    isTypeof  
console.log(Object.prototype.toString.call(f));

Array.prototype[Symbol.toStringTag] = 'array';
console.log(Object.prototype.toString.call(f));

function Pre () {

}


// 不讲
// Object.defineProperty(Pre,Symbol.hasInstance,{
//   value: function(){
//      return false
//   }
// })

// Pre.prototype[Symbol.toStringTag] = 'Pre';

const me = new Pre();
console.log(me instanceof Pre);
// [object Object]
console.log(Object.prototype.toString.call(me));
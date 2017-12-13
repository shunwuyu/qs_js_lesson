// replace
const melody = "  melody  ";
console.log(melody.replace(/\s/, "").length);
console.log(melody.replace(/\s+/, "").length);
console.log(melody.replace(/\s+/g, "").length);
// \S非空白符
console.log(melody.replace(/\S+/g, "").length);
const str = "Hello Google!";
console.log(str.replace('Google', "Baidu"));
console.log(str.replace(/Google/, "Baidu"));
console.log(str.replace('o', '-'));
// 全局替换
console.log(str.replace(/o/g, '-'));
console.log(str.replace(/G/, '^'));
console.log(str.replace(/G/ig, '^'));


// substring
const str1 = str.substring(1,3);
console.log(str1);
const name = "aaa bbb ccc";
// \b 单词的开头和结尾 
// \w 字符 大小写字母， 数字

const str2 = name.replace(/\b\w+\b/g, function(word) {
  return word.substring(0,1).toUpperCase() + word.substring(1);
});
console.log(str2);
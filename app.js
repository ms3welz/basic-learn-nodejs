// console.log("Hello Welz");

// var a = 5;
// var b = 10
// console.log(a);
// console.log(a/b);



a = 3;
b = 7;

const op = require("./module");

const moduleTitle = op.title;
const moduleKali = op.kali(a, b);
const moduleKurang = op.kurang(a, b);

console.log(moduleTitle);
console.log(a," x ", b, " = ", moduleKali);
console.log(a," - ", b, " = ", moduleKurang);
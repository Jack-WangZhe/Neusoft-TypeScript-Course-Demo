// !也就是非空断言操作符会从编译生成的 JavaScript 代码中移除
var a = undefined;
var b = a;
// const c: number = a; // Error - Type 'undefined' is not assignable to type 'number'.ts(2322)
console.log(b);
// 使用tsc编译看一下...

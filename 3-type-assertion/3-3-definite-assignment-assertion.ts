// 确认赋值断言
let x: number;
initialize1();
// Variable 'x' is used before being assigned.ts(2454)
console.log(2 * x); // Error
function initialize1() {
  x = 10;
}

// 上述错误很明显的指出异常信息是说变量 x 在赋值前被使用了, 但实际在运行的时候我们会调用function去赋值
// 解决上述的问题我们可以使用确定赋值断言

let y!: number; // 使用确认断言后, TypeScript 编译器就会知道该属性会被明确地赋值。
initialize2();
console.log(2 * y); // 20
function initialize2() {
  y = 10;
}
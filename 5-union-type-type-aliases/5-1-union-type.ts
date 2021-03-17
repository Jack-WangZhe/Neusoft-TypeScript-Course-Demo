// 联合类型
let age: string | number;
// 类型别名
type StringAndNumber = string | number;

function checkStringOrNumber(arg: StringAndNumber) {
    console.log(arg);
}
checkStringOrNumber(1);
checkStringOrNumber('1');
checkStringOrNumber(false); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)
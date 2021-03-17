// 断言的两种形式
let someString: any = "This is a string";
let strLength1: number = someString.length;
console.log(strLength1);

// 尖括号的语法
let strLength2: number = (<string>someString).length;
console.log(strLength2);

// as语法
let strLength3: number = (someString as string).length;
console.log(strLength3);
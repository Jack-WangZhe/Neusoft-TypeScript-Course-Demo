// Boolean
let isJack: boolean = true;
// ES5: var isJack = false;

// Number
let age: number = 10;
// ES5: var age = 10;

// String
let realName: string = 'Jack';
// ES5: var realName = 'Jack';

// Symbol - target: ES6才能成功编译,因为ES6才提出的Symbol
const symKey = Symbol();
let obj = {
    [symKey]: "Jack"
};
console.log(obj[symKey]); // Jack

// Array
let list1: number[] = [1, 2, 3];
// ES5: var list1 = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // 泛型
// ES5: var list2 = [1, 2, 3];
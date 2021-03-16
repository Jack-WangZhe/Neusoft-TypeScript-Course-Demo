let value: unknown;
value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = new TypeError(); // OK
value = Symbol("type"); // OK


let unknownValue: unknown;
let value1: unknown = unknownValue; // OK
let value2: any = unknownValue; // OK
let value3: boolean = unknownValue; // Error
let value4: number = unknownValue; // Error
let value5: string = unknownValue; // Error
let value6: object = unknownValue; // Error
let value7: any[] = unknownValue; // Error
let value8: Function = unknownValue; // Error
// unknown 类型只能被赋值给 any 类型和 unknown 类型本身
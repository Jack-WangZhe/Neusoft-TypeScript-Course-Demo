// Object Destructing
let person = {
    age: 18,
    gender: "Male",
};

let { age, gender } = person;
console.log(age); // 18
console.log(gender); // Male

// Array Destructing
let x: number; let y: number; let z: number;
let three_array = [0, 1, 2];
[x, y, z] = three_array;
console.log(`x is ${x}`); // x is 0
console.log(`y is ${y}`); // y is 1
console.log(`z is ${z}`); // z is 2
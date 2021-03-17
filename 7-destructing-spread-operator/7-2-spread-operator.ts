// 展开运算符
// Object Spread
let human = {
    name: "Jack",
    gender: "Male",
    address: "Dalian",
};
let humanWithAge = {
    ...human,
    age: 18
};
console.log(humanWithAge); // { name: 'Jack', gender: 'Male', address: 'Dalian', age: 18 }

// Array Spread
let two_array = [0, 1];
let five_array = [...two_array, 2, 3, 4];
console.log(five_array); // [ 0, 1, 2, 3, 4 ]
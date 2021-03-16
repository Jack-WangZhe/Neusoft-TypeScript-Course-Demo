let tupleType: [string, boolean];
tupleType = ['Jack', true];

console.log(tupleType[0]);
console.log(tupleType[1]);

// 元组类型在元素的个数和类型上都需要相同
tupleType = ["Tom", "Jack"]; // Type 'string' is not assignable to type 'boolean'.ts(2322)
tupleType = ["Tom"]; // Type '[string]' is not assignable to type '[string, boolean]'

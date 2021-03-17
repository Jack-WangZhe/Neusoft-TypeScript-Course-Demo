// readonly 可以用来定义只读属性,用于限制只能在对象刚刚创建的时候修改其值
interface User {
    readonly name: string;
    age: number;
}
let jack: User = {
    name: 'Jack',
    age: 18
};
jack.age = 19;
console.log(jack);
jack.name = 'Tom'; // Cannot assign to 'name' because it is a read-only property.ts(2540)

// ReadonlyArray<T> 类型把所有可变方法去掉了，可以确保数组创建后再也不能被修改
let readonlyArray: ReadonlyArray<number> = [0, 1, 2, 3];
readonlyArray.push(4); // Property 'push' does not exist on type 'readonly number[]'.ts(2339)
readonlyArray[0] = 2; // Index signature in type 'readonly number[]' only permits reading.ts(2542)
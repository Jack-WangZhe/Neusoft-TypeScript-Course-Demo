// 类型守卫: 也可以称作是类型保护，用于类型检查，确保类型在指定的范围内。
// 第一种类型保护
// 关键字: in - 判断是否有指定属性
interface Admin {
    name: string;
    privileges: string[];
}
interface Employee {
    name: string;
    createDate: Date;
}
(function printEmployeeInformation(emp: Employee | Admin) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("createDate" in emp) {
        console.log("Create Date: " + emp.createDate);
    }
})({
    name: 'Jack',
    privileges: ['a', 'b']
});

// typeof关键字 - 获取变量的类型 - 返回如下几个结果：number, boolean, string, function, object, undefined
// 拼接padding left的功能函数
(function paddingFuc(val: any) {
    console.log(typeof val)
    if (typeof val === "number" || typeof val === "string") {
        console.log(`Padding is ${val}px`)
    } else {
        throw new Error(`Expected string or number, got '${val}'.`);
    }
})(15); // '15' true
console.log(typeof 15);
console.log(typeof NaN);
console.log(typeof true);
console.log(typeof '15');
function printGood() {
    console.log('Good');
}
console.log(typeof printGood);
console.log(typeof {});
console.log(typeof []);
console.log(typeof new Date());
console.log(typeof null);
console.log(typeof undefined);

// instanceof运算符 - instanceof 是判断变量是否为某个对象的实例，返回值为 true 或 false
// typeof 对数组 [] 和对象 {} 的返回值都是 object ，无法区分数组和对象，但是 instanceof 可以区分
console.log(new Date() instanceof Date);
console.log([] instanceof Array);
class ExcellentEmployee implements Employee {
    name: string;
    createDate: Date;
    constructor(employee?: Employee) {
        this.name = employee?.name ? employee?.name : 'Jack';
        this.createDate = employee?.createDate ? employee?.createDate : new Date();
    }
    praise() {
        console.log('Good Work!');
    }
};
console.log(new ExcellentEmployee() instanceof ExcellentEmployee);
// 考虑一下这段代码,输出得结果是什么呢?
console.log({name: 'Jack', createDate: new Date()} instanceof ExcellentEmployee);

class Employee {
    // 静态属性
    static company: string = "Kingland";
    // 成员属性
    name: string;

    // 构造函数 - 执行初始化操作
    constructor(name: string) {
        this.name = name;
    }

    // 静态方法
    static getClassName() {
        return "Class name is Employee";
    }

    // 成员方法
    greet() {
        return `Hello ${this.name}`;
    }
}
// 输出静态属性
console.log(Employee.company);
// 调用静态方法
console.log(Employee.getClassName());
// 初始化实例
let jack = new Employee("Jack");
// 输出成员属性值
console.log(jack.name);
// 调用成员方法
console.log(jack.greet());
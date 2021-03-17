interface Employee {
    employeeName: string;
    age?: number;
    [propertyName: string]: any; // 定义任意属性
}
const jack: Employee = {}; // Property 'employeeName' is missing in type '{}' but required in type 'Employee'.ts(2741)
const tom: Employee = { employeeName: 'Tom' };
const gavin: Employee = { employeeName: 'Gavin', age: 20 };
const edward: Employee = { employeeName: 'Edward', age: 20, sex: 'Male' };
const ida: Employee = { employeeName: 'Ida', age: 20, sex: 'Female', hobby: 'Shopping' };
abstract class Person {
    abstract speak(): void;
}
let person1 = new Person(); // Cannot create an instance of an abstract class.ts(2511)

class SmartPerson extends Person {
    speak(): void {
        console.log('I can speak...');
    }
}
let person2 = new SmartPerson();
person2.speak();
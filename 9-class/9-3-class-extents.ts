class Dog {
    color: string;
}
class GoldenDog extends Dog {
    study() {
        console.log('Study...');
    }
}
let dog = new GoldenDog();
dog.color = 'Golden'; // GoldenDog extends the Dog's color property
class User {
    // private property
    private _name: string;

    // getter
    get name(): string {
        return this._name;
    }

    // setter
    set name(newName: string) {
        this._name = newName;
    }
}

// init a User instance
let user = new User();
console.log(user.name); // use getter to get name value
user.name = 'Jack'; // use setter to set name value
console.log(user.name); // use getter to get name value
console.log(user._name); // Error: Property '_name' is private and only accessible within class 'User'.ts(2341)
"use strict";
//OOP
Object.defineProperty(exports, "__esModule", { value: true });
//class properties annotations, readonly properties
class PersonOOP {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//acces modifiers
class UserOOP {
    name;
    age;
    location;
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    getName() {
        return (`my name ${this.name}`);
    }
}
let user = new UserOOP("John", 35, "USA");
console.log(user.name);
//console.log(user.age) - error
console.log(user.getName());
class Admin extends UserOOP {
    password;
    constructor(name, age, location, password) {
        super(name, age, location);
        this.password = password;
    }
}
const ad = new Admin("Alex", 22, "Poland", "123");
//getters&setters
class myClass {
    _myProperty = 0;
    get myProperty() {
        return this._myProperty;
    }
    set myProperty(value) {
        this._myProperty = value;
    }
}
const myVar = new myClass();
console.log(myVar.myProperty);
myVar.myProperty = 10;
//# sourceMappingURL=lesson7.js.map
"use strict";
//TYPE NARROWING
Object.defineProperty(exports, "__esModule", { value: true });
function exampleFunction(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
exampleFunction("hello"); //HELLO
exampleFunction(99); //99.00
//instanceof operator
class CuteDog {
    bark() {
        console.log("woof woof");
    }
}
class Cat {
    meow() {
        console.log("meowwww");
    }
}
function animalSound(animal) {
    if (animal instanceof CuteDog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const myDog = new CuteDog();
animalSound(myDog); //woof woof
const manager = {
    id: 123,
    name: "Bob",
    department: "big department",
    role: "manager"
};
//# sourceMappingURL=lesson10.js.map
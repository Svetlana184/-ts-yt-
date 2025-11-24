"use strict";
//INTERFACES
Object.defineProperty(exports, "__esModule", { value: true });
const exPerson = {
    firstname: "John",
    age: 30
};
const add = (a, b) => a + b;
const substract = (a, b) => a - b;
console.log(add(9, 1));
//class implementing the interface
class Car {
    owner;
    start() {
        console.log("car started");
    }
    stop() {
        console.log("car stopped");
    }
}
//usage
const myCar = new Car();
myCar.start();
const movie1 = {
    name: "Star Wars",
    genre: "action",
    ratings: 8.9,
    printMovieInfo(name, price, ratings) {
        return `movie name ${name}, price ${price}, ratings ${ratings}`;
    }
};
const m = movie1.printMovieInfo("twilight", 100, 9);
console.log(m);
//usage
const littleCar = {
    brand: "Toyota",
    model: "Camry",
    start() {
        console.log("working...");
    },
    stop() {
        console.log("stopped");
    }
};
//# sourceMappingURL=lesson8.js.map
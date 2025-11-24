"use strict";
//GENERICS<T>
Object.defineProperty(exports, "__esModule", { value: true });
function printInfo(x) {
    return x;
}
const str = printInfo("Hello");
const num = printInfo(10);
const dog = printInfo({ name: "Bobby", breed: "Labrador" });
function getRandomValuePair(obj) {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}
const strObj = { a: 'apple', b: 'banana', c: 'cherry' };
const res = getRandomValuePair(strObj);
console.log(res);
const numObj = { a: 1, b: 2, c: 3 };
const res1 = getRandomValuePair(numObj);
console.log(res1);
function filterArray(array, condition) {
    return array.filter((item) => condition(item));
}
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = filterArray(numArr, (num) => num % 2 === 0);
console.log(evenNumbers);
const strArr = ['apple', 'banana', 'cherry', 'strawberry'];
const shortWords = filterArray(strArr, (str) => str.length <= 5);
console.log(shortWords);
const fruitArr = [
    { name: "apple", color: "red" },
    { name: "cherry", color: "red" },
    { name: "banana", color: "yellow" }
];
const redFruits = filterArray(fruitArr, (fruit) => fruit.color === "red");
console.log(redFruits);
function reversePair(value1, value2) {
    return [value2, value1];
}
const revPair = reversePair("rrr", 22);
console.log(revPair);
class Box {
    content;
    constructor(initialContent) {
        this.content = initialContent;
    }
    getContent() {
        return this.content;
    }
    setContent(newContent) {
        this.content = newContent;
    }
}
const strBox = new Box("Hello");
console.log(strBox.getContent());
//# sourceMappingURL=lesson9.js.map
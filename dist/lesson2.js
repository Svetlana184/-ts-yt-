"use strict";
//2
Object.defineProperty(exports, "__esModule", { value: true });
//VOID
function sayHello(name = "anonim") {
    console.log("hi " + name);
}
sayHello();
//NEVER
let x;
function errorFunction() {
    throw new Error();
}
function infinityLoop() {
    while (true) { }
}
x = infinityLoop();
//# sourceMappingURL=lesson2.js.map
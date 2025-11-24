"use strict";
//1
Object.defineProperty(exports, "__esModule", { value: true });
//ANNOTATIONS
// let myVar: type = value;
let myName = "korushk";
//TYPE INFERENCE
let tech = " Typescript";
//tech = false - error
//ANY
let color = 'crimson';
color = 20;
//ANNOTATIONS FUNCTION PARAMETERES + DeFAULT PARAMETERS
function addOne(num = 9) {
    return num + 1;
}
const res = addOne(5);
const res1 = addOne();
//const res1 = addOne("5"); - error 
//# sourceMappingURL=lesson1.js.map
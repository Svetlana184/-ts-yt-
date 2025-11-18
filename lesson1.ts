//1

//ANNOTATIONS
// let myVar: type = value;
let myName : string = "korushk";

//TYPE INFERENCE
let tech = " Typescript";
//tech = false - error

//ANY
let color: any = 'crimson';
color = 20;

//ANNOTATIONS FUNCTION PARAMETERES + DeFAULT PARAMETERS
function addOne(num: number = 9){
    return num + 1;
}
const res = addOne(5);
const res1 = addOne();
//const res1 = addOne("5"); - error 
//INTERSECTION TYPES
type Person = {
    name:string;
    age:number;
};
type Employee = {
    id:number;
    title:string;
};

type PersonEmployee = Person & Employee;
const Alice : PersonEmployee = {
    name:"Alice",
    age:25,
    id:1,
    title:"manager"
}


//UNIONS
let myVar : number | string;
myVar = 8;
myVar = "uuuu";
///myVar = false - error

const items : (number | string)[] = [1,2, "word"]


//LITERAL TYPES
let color : "red" | "blue" | "green";
color = "red";
//color = "yellow" - error

let isTrue : true;
isTrue = true;
//4

//OBJECTS
const person : {firstName: string; age:number} = {
    firstName : "John",
    age:30
};
console.log(person.age);

function printUser() : {name: string; age:number} {
    return {name:"Alex", age:22};
}
const res = printUser();

//TYPE ALIASES
type Person = {
    name:string;
    age:number;
};
const firstPerson : Person = {name:"Alice", age:25};

//OPTIONAL PROPERTIES
type User = {
    name:string;
    location? : string
};
let user1 : User = {name:"Ann"};
console.log(user1.location); //undefined
let user2 : User = {name:"Alan", location : " USA"};
//TYPE NARROWING


//type guards
type myType = string | number;
function exampleFunction(value:myType):void{
    if(typeof value === 'string'){
        console.log(value.toUpperCase())
    } else {
        console.log(value.toFixed(2))
    }
}
exampleFunction("hello"); //HELLO
exampleFunction(99);     //99.00


//instanceof operator
class CuteDog {
    bark() : void {
        console.log("woof woof")
    }
}
class Cat {
    meow() : void {
        console.log("meowwww")
    }
}
function animalSound(animal: CuteDog | Cat) : void {
    if (animal instanceof CuteDog) {
        animal.bark()
    } else{
        animal.meow()
    }
}
const myDog = new CuteDog();
animalSound(myDog); //woof woof


//intersection types
type Employee = {
    id: number;
    name: string
}
type Manager = {
    department: string;
    role: string;
}
type ManagerEmployee = Manager & Employee;
const manager : ManagerEmployee = {
    id: 123,
    name : "Bob",
    department: "big department",
    role : "manager"
}
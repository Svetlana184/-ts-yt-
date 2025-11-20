//INTERFACES

interface Person {
    firstname: string;
    age: number;
}

const exPerson: Person ={
    firstname: "John",
    age: 30
}

//interface for a function
interface MathOperation {
    (x:number, y: number): number
}

const add: MathOperation = (a,b) => a+b;
const substract: MathOperation = (a,b) => a-b;
console.log(add(9,1));

//interface for a class
interface Vehicle {
    start(): void;
    stop(): void;
}

//class implementing the interface
class Car implements Vehicle {
    owner?: string;
    start(){
        console.log("car started")
    }
    stop() {
        console.log("car stopped")
    }
}

//usage
const myCar = new Car();
myCar.start();


interface MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieInfo(name: string, price: number, ratings: number): string | number
}

interface MovieGenre extends MovieDetails {
    genre: string;
}

const movie1: MovieGenre = {
    name: "Star Wars",
    genre: "action",
    ratings: 8.9,
    printMovieInfo(name:string, price: number, ratings: number): string | number {
        return `movie name ${name}, price ${price}, ratings ${ratings}`;
    }
}

const m = movie1.printMovieInfo("twilight", 100, 9);
console.log(m);

//DECLARATION MERGING
interface CuteCar {
    brand: string;
    start(): void;
}

//interface extension
interface CuteCar {
    model: string;
    stop(): void;
}

//usage
const littleCar: CuteCar = {
    brand: "Toyota",
    model: "Camry",
    start(){
        console.log("working...")
    },
    stop(){
        console.log("stopped")
    }
}
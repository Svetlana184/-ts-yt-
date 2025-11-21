//GENERICS<T>

function printInfo<T>(x: T){
    return x;
}
const str = printInfo<string>("Hello");
const num = printInfo<number>(10);
interface Dog {
    name: string;
    breed: string;
}
const dog = printInfo<Dog>({name:"Bobby", breed: "Labrador"});


function getRandomValuePair<T>(obj: {[key:string] :T}): {
    key:string;
    value:T;
}
{
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)]
    return {key: randKey, value: obj[randKey]};
}
const strObj = {a: 'apple', b: 'banana', c:'cherry'};
const res = getRandomValuePair<string>(strObj);
console.log(res);
const numObj = {a: 1, b: 2, c:3};
const res1 = getRandomValuePair<number>(numObj);
console.log(res1);


function filterArray<T>(array:T[], condition: (item:T) => boolean) : T[] {
    return array.filter((item)=> condition(item))
}
const numArr = [1,2,3,4,5,6,7,8,9]
const evenNumbers = filterArray<number>(numArr, (num)=> num%2===0);
console.log(evenNumbers)
const strArr = ['apple', 'banana', 'cherry', 'strawberry']
const shortWords = filterArray<string>(strArr, (str)=> str.length <= 5);
console.log(shortWords)

interface Fruit {
    name: string;
    color: string;
}
const fruitArr:Fruit[] = [
    {name:"apple", color:"red"},
    {name:"cherry", color:"red"},
    {name:"banana", color:"yellow"}
]
const redFruits = filterArray<Fruit>(fruitArr, (fruit) => fruit.color === "red")
console.log(redFruits)

function reversePair<T,U>(value1:T, value2:U){
    return [value2, value1]
}
const revPair = reversePair<string, number>("rrr", 22);
console.log(revPair)

class Box<T>{
    private content:T;
    constructor(initialContent:T){
        this.content = initialContent;
    }
    getContent() : T{
        return this.content;
    }
    setContent(newContent:T) : void{
        this.content = newContent;
    }
}
const strBox = new Box<string>("Hello");
console.log(strBox.getContent());

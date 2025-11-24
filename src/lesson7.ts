//OOP

//class properties annotations, readonly properties
class PersonOOP{
    readonly name:string;
    age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

//acces modifiers
class UserOOP{
    public name:string;
    private age:number;
    protected location: string;
    constructor(name:string, age:number, location:string){
        this.name = name;
        this.age = age;
        this.location = location
    }
    getName():string 
    {
        return (`my name ${this.name}`)
    }
}
let user = new UserOOP("John", 35, "USA");
console.log(user.name);
//console.log(user.age) - error
console.log(user.getName());

class Admin extends UserOOP{
    private password : string;
     constructor(name:string, age:number, location:string, password:string){
        super(name, age, location)
        this.password = password;
    }
}
const ad = new Admin("Alex", 22, "Poland", "123");

//getters&setters
class myClass{
    private _myProperty: number=0;
    get myProperty():number{
        return this._myProperty
    }
    set myProperty(value:number){
        this._myProperty = value
    }
}
const myVar = new myClass();
console.log(myVar.myProperty);
myVar.myProperty = 10;
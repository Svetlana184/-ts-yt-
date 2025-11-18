//VOID
function sayHello(name: string = "anonim"):void{
    console.log("hi " + name)
}
sayHello();

//NEVER
let x:never;
function errorFunction():never{
    throw new Error()
}
function infinityLoop():never{
    while(true){}
}
x = infinityLoop();
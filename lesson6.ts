//TUPLES  
let myTuple: [string, number] = ["hello", 42];
//myTuple = [42, "hello"] - error
console.log(myTuple[0]); //"hello"
console.log(myTuple[1]); //42

let [first, second] = myTuple;
console.log(first); //"hello"
console.log(second); //42


//ENUMS
enum Weather{
    sunny,
    cloudy,
    windy,
    rainy,
    snowy
};
enum Weather2{
    sunny = "Sunny",
    cloudy = "Cloudy",
    windy = "Windy",
    rainy = "Rainy",
    snowy = "Snowy"
};

const currentWeather = Weather.cloudy;
console.log(currentWeather) //0

const currentWeather1 = Weather2.cloudy;
console.log(currentWeather) //Cloudy
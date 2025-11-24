"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TUPLES  
let myTuple = ["hello", 42];
//myTuple = [42, "hello"] - error
console.log(myTuple[0]); //"hello"
console.log(myTuple[1]); //42
let [first, second] = myTuple;
console.log(first); //"hello"
console.log(second); //42
//ENUMS
var Weather;
(function (Weather) {
    Weather[Weather["sunny"] = 0] = "sunny";
    Weather[Weather["cloudy"] = 1] = "cloudy";
    Weather[Weather["windy"] = 2] = "windy";
    Weather[Weather["rainy"] = 3] = "rainy";
    Weather[Weather["snowy"] = 4] = "snowy";
})(Weather || (Weather = {}));
;
var Weather2;
(function (Weather2) {
    Weather2["sunny"] = "Sunny";
    Weather2["cloudy"] = "Cloudy";
    Weather2["windy"] = "Windy";
    Weather2["rainy"] = "Rainy";
    Weather2["snowy"] = "Snowy";
})(Weather2 || (Weather2 = {}));
;
const currentWeather = Weather.cloudy;
console.log(currentWeather); //0
const currentWeather1 = Weather2.cloudy;
console.log(currentWeather); //Cloudy
//# sourceMappingURL=lesson6.js.map
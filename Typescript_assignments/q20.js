"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fav_fruit = ["mango", "banana", "stawberry"];
var fruit;
var prompt = require("prompt-sync")();
fruit = prompt("Enter any fruit name: ");
var i = 0;
if (fruit == fav_fruit[i]) {
    console.log("I really like ".concat(fav_fruit[i]));
}
else if (fruit == fav_fruit[i + 1]) {
    console.log("I really like ".concat(fav_fruit[i + 1]));
}
else if (fruit == fav_fruit[i + 2]) {
    console.log("I really like ".concat(fav_fruit[i + 2]));
}
else {
    console.log("I do not like ".concat(fruit, " so much"));
}

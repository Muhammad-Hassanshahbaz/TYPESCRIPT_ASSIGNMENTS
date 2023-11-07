"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet;
greet = ["Ali", "Hasan", "Admin", "Raza", "Muqeem"];
var username, i;
var prompt = require("prompt-sync")();
username = prompt("Enter the username: ");
for (i = 0; i < 5; i++) {
    if (username == "Admin") {
        console.log("Hello Admin, would you like to see the status report: ");
        break;
    }
    if (username == greet[i]) {
        console.log("Hello ".concat(greet[i], ", thank you for logging: "));
    }
}

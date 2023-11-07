"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shirt(size, print) {
    console.log("The size of the shirt is:".concat(size, " \n \"").concat(print, " is printed on a shirt\""));
}
var prompt = require("prompt-sync")();
var s, p;
s = prompt("Enter the size of the shirt: ");
p = prompt("Enter the message you need to get print on a shirt: ");
shirt(s, p);

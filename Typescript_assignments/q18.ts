export{};
var alien_color;

const prompt= require("prompt-sync")();

alien_color=prompt("Enter red, green & yellow to shoot to alien: ");

if(alien_color=="green" || alien_color=="Green")
{
    console.log("player just earned 5 points for shooting the alien.")
}
else if(alien_color=="red" || alien_color=="Red")
{
    console.log("player just earned 15 points for shooting the alien.")
}
else if(alien_color=="yellow" || alien_color=="Yellow")
{
    console.log("player just earned 10 points for shooting the alien.")
}

export{};
var greet:string[];
greet=["Ali","Hasan","Admin","Raza","Muqeem"]

var username,i;
const prompt = require("prompt-sync")()

username=prompt("Enter the username: ");

for(i=0 ; i<5 ;i++)
{
   if(username=="Admin")
    {
        console.log(`Hello Admin, would you like to see the status report: `);
        break;
    }
    if(username==greet[i])
    {
        console.log(`Hello ${greet[i]}, thank you for logging: `);
    }
    
}

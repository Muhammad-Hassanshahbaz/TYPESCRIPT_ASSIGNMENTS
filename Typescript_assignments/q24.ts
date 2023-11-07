export{};

function shirt(size:number,print:string)
{
    console.log(`The size of the shirt is:${size} \n "${print} is printed on a shirt"`)
}

const prompt=require("prompt-sync")();

var s,p;
s=prompt("Enter the size of the shirt: ")
p=prompt("Enter the message you need to get print on a shirt: ")

shirt(s,p);
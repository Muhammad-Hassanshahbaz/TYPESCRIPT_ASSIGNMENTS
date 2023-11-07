export{};

var userlist:string[];
var i;
userlist=["Ali","Hasan","Admin","Raza","Muqeem"]

for(i=(userlist.length-1); i>=0 ; i--)
{
    console.log(`${userlist[i]} is removed from list: `);
    userlist.pop();
}

if(userlist.length==0)
{
    console.log(`We need to add more users: `)
}
else 
{
    console.log(`Abhi user h`)
}
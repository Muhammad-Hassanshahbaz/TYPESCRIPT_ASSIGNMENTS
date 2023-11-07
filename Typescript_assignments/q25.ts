export{};

function magician(mag:string[])
{
    var i;
    for(i=0 ;i<mag.length; i++)
    {
        console.log(`${mag[i]} is a great magician`)
    }
}

var magi:string[];
magi=["Aslam","Yawar","Kashif"]
magician(magi)
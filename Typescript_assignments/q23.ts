
 var c_username:string[];
 var new_username:string[];
 var i,j;

 c_username=["Faiz","Nabeel","Jafri","Tahir"];
 new_username=["Tahir","Sahir","Noman","Rameez"];

 for(i=0 ; i<4; i++)
 {
    for(j=0; j<4 ; j++)
    {
        if(c_username[j]==new_username[i])
        {
            console.log(`the person will need to enter a new username`);
        }   
    }
    console.log(`username is available: `)
 }
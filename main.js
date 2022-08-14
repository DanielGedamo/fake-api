
async function myJson (){
   try {
    await fetch ("https://my-json-server.typicode.com/DanielGedamo/fake-api/data").then(res=>res.json())
   }
catch{}
}

myJson().then(res=>{
    console.log(res);
})

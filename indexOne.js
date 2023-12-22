const express = require("express");
const app = express();
const port = 5001;

app.get('/',(req,res)=>{
res.send("this is jlian.");

})

app.listen(port,()=>{
    console.log(`port is running on : ${port}`);
})
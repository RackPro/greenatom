const exp = require("express");
const app = exp();

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.listen(3000);
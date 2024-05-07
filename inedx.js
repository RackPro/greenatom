const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


app.get("/getone/:id", async (req,res)=>{
    let id = req.params.id;
    let data;
    res.json(data);
}); //вывести один
app.get("/gets", async (req,res)=>{
    res.json("")
}); //вывести все
app.put(); //изменить один
app.delete(); //удалить один
app.post(); //добавить один

//middleware
app.listen(5000, ()=>{
    console.log("Сервер запущен");
})
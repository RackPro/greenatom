const express = require("express");
const cors = require("cors");
const sequelize = require("./db.js");
const router = require("./router/index.js");

require("dotenv").config();
const app = express();

app.use(cors({
    credentials: true, //использование куки
    origin: process.env.CLIENT_URL //корс для постман
}));

app.use("/api", router);

async()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync({force: true}); //alter
        app.listen(process.env.SERVER_PORT, ()=>{
            console.log(`Сервер запущен на порту ${process.env.SERVER_PORT}`);
        });
    }catch(e){
        console.log(e);
    }
}
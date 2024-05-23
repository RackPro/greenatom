import express, { Application, NextFunction,Request, Response } from "express";
import router from "./router/router";
import {IUser} from "./interface/IUser";

require("dotenv").config();
const app:Application = express();

app.get("/", (req:Request, res:Response, next:NextFunction)=>{
    let user:IUser = {
        name: "Sasha",
        age: 24,
        description: "herznaet",
        getFullName(name:String){return name}
    }
    res.json(user);
})

app.use(router);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT} port`);
})
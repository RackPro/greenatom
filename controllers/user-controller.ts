import { NextFunction, Response, Request} from "express";

type userType = {
    id:Number,
    name:String,
    age: Number
}

let user: userType[] = [{
    id:1,
    name:"Sasha",
    age: 23
},{
    id:2,
    name:"Lesha",
    age:54
}]

class userController{
    async getUser(req:Request, res:Response, next:NextFunction){
        let paramsID = parseInt(req.params.id);
        for (let i=0; i<user.length; i++){
            if (user[i].id == paramsID){
                res.json(user[i]);
                break;
            }
        }
    }
    async getUsers(req:Request, res:Response, next:NextFunction){
        res.json(user);
    }
}

export default new userController();
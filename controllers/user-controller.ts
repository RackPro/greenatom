import { NextFunction, Response, Request} from "express";

class userController{
    async getUser(req:Request, res:Response, next:NextFunction){
        res.json("test");
    }
}

export default new userController();
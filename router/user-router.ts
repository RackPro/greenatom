import { Router } from "express";
import userController from "../controllers/user-controller";
const userRouter:Router = Router();

userRouter.get("/user", userController.getUsers);
userRouter.get("/user/:id", userController.getUser);

export default userRouter;
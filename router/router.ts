import { Router } from "express";
import userController from "../controllers/user-controller";
import userRouter from "./user-router";
const router:Router = Router();

router.use("/api", userRouter);

export default router;

import { Router } from "express";
import userController from "../controllers/user-controller";
const router:Router = Router();

router.use("/get", userController.getUser);

export default router;

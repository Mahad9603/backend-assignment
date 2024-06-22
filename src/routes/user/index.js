import { Router } from "express";
import userController from "../../controller/user/index.js";

const userRouter = Router();

userRouter.post('/signup', userController.signUp);
userRouter.post('/signin', userController.signIn);

export default userRouter;
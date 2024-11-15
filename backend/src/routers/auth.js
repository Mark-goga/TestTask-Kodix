import { Router } from "express";
import ctrlWrapper from "../utils/ctrlWrapper.js";
import * as authController from '../controller/auth.js';
import validateBody from "../utils/validateBody.js";
import {refreshTokenSchema, userSigninSchema, userSignupSchema} from "../validation/users.js";

const authRouter = Router();

authRouter.post('/signin' , validateBody(userSigninSchema), ctrlWrapper(authController.signinController));
authRouter.post('/signup' , validateBody(userSignupSchema), ctrlWrapper(authController.signupController));
authRouter.post('/refresh' ,validateBody(refreshTokenSchema), ctrlWrapper(authController.refreshController));
export default authRouter;

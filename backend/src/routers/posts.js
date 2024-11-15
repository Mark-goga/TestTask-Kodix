import { Router } from "express";
import authenticate from "../midllewares/authenticate.js";
import ctrlWrapper from "../utils/ctrlWrapper.js";
import * as postsController from "../controller/posts.js";

const postsRouter = Router();

postsRouter.get('/' , ctrlWrapper(postsController.getPostsController));

postsRouter.use(authenticate);

postsRouter.get('/:postId' , ctrlWrapper(postsController.getPostDetailsController));
export default postsRouter;
import express  from 'express';

import cors from 'cors';

import { env } from './utils/env.js';
import errorHandler from './midllewares/errorHandler.js';
import notFoundHandler from './midllewares/notFoundHandler.js';

import authRouter from './routers/auth.js';
import postsRouter from "./routers/posts.js";


export function setupServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use('/auth' , authRouter);
  app.use('/posts' , postsRouter);
  app.use(notFoundHandler);
  app.use(errorHandler);

  const port = Number(env("PORT", 3000));

  app.listen(port, () => console.log(`Server running on port ${port}`));
  return app;
}

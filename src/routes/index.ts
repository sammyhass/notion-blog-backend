import { Router } from 'express';
import { getAllPosts, getSinglePost } from './Posts';

// Posts handler
const postsRouter = Router();
postsRouter.get('/all', getAllPosts);
postsRouter.get('/:id', getSinglePost);

// Export the base-router
const baseRouter = Router();
baseRouter.use('/posts', postsRouter);
export default baseRouter;

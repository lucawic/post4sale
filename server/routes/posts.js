import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost,deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/', getPost);
router.get('/', createPost);
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)

export default router;
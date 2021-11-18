import express from 'express';

<<<<<<< HEAD
import {getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js'
=======
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
>>>>>>> 046b484d5923dcf5485041d82ad99e9bc3f4306c

const router = express.Router();

router.get('/', getPosts);
<<<<<<< HEAD
router.get('/', createPost);
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost')
=======
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
>>>>>>> 046b484d5923dcf5485041d82ad99e9bc3f4306c

export default router;
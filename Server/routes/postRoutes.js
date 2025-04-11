import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  getPostsByCategory,
  deletePost
} from '../controllers/postController.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', verifyToken, createPost);
router.put('/:id', verifyToken, updatePost);
router.delete('/:id', verifyToken, deletePost);
router.get('/category/:category', getPostsByCategory);

export default router;

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

//Create a post in a specific thread
router.post('/threads/:threadId/posts', postController.createPost);

//Get all posts in a specifik thread
router.get('/threads/:threadId/posts', postController.getPostsByThread);

//Update a post
router.put('/posts/:id', postController.updatePost);

//Delete a post
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
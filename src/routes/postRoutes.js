const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

//Create a post in a specific thread
router.post('/threads/:threadId/posts', postController.createPost);

//Get all posts in a specifik thread
router.get('/threads/:threadId/posts', postController.getPostsByThread);

module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('../../config/passport')
const postController = require('../controllers/postController');

//Middleware för att kunna göra anrop mot mina endpoints utan jwt
const requireAuth = process.env.REQUIRE_AUTH === 'true'
? passport.authenticate('jwt', { session: false })
: (req, res, next) => next();

//Ändra ovanstående middleware till detta när det är dags att köra på riktigt
/* const requireAuth = passport.authenticate('jwt', { session: false }); */


//Create a post in a specific thread
router.post('/threads/:threadId/posts', requireAuth, postController.createPost);

//Get all posts in a specifik thread
router.get('/threads/:threadId/posts', requireAuth, postController.getPostsByThread);

//Update a post
router.put('/posts/:id', requireAuth, postController.updatePost);

//Delete a post
router.delete('/posts/:id', requireAuth, postController.deletePost);

module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('../../config/passport')
const threadController = require('../controllers/threadController');

//Middleware for att kontrollera 'REQUIRE_AUTH'
const requireAuth = process.env.REQUIRE_AUTH === 'true'
? passport.authenticate('jwt', { session:false })
: (req, res, next) => next();


//Route to create new thread
router.post('/', requireAuth, threadController.createThread);

//Route to get all threads
router.get('/', requireAuth, threadController.getAllThreads);

//Route to update thread
router.put('/:id', requireAuth, threadController.updateThread);

//Route to delete a thread
router.delete('/:id', requireAuth, threadController.deleteThread);

module.exports = router;
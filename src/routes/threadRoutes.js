const express = require('express');
const router = express.Router();
const threadController = require('../controllers/threadController');

//Route to create new thread
router.post('/threads', threadController.createThread);

//Route to get all threads
router.get('/threads', threadController.getAllThreads);

//Route to update thread
router.put('/threads/:id', threadController.updateThread);

//Route to delete a thread
router.delete('/threads/:id', threadController.deleteThread);

module.exports = router;
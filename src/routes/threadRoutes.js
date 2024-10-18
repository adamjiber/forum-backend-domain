const express = require('express');
const router = express.Router();
const threadController = require('../controllers/threadController');

//Route to create new thread
router.post('/threads', threadController.createThread);

//Route to get all threads
router.get('/threads', threadController.getAllThreads);

module.exports = router;
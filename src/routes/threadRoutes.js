const express = require('express');
const router = express.Router();
const threadController = require('../controllers/threadController');

//Route to create new thread
router.post('/', threadController.createThread);

//Route to get all threads
router.get('/', threadController.getAllThreads);

//Route to update thread
router.put('/:id', threadController.updateThread);

//Route to delete a thread
router.delete('/:id', threadController.deleteThread);

module.exports = router;
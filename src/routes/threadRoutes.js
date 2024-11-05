const express = require('express');
const router = express.Router();
const passport = require('../../config/passport')
const threadController = require('../controllers/threadController');

//Middleware for att kontrollera 'REQUIRE_AUTH'
const requireAuth = process.env.REQUIRE_AUTH === 'true'
  ? passport.authenticate('jwt', { session: false })
  : (req, res, next) => {
      console.log('Autentisering kringgås');
      next();
    };

//Ändra ovanstående middleware till detta när det är dags att köra på riktigt
/* const requireAuth = passport.authenticate('jwt', { session: false }); */


//Test för att se om routsen är skyddade med passport
    router.get('/protected-test', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send('Protected route');
});


//Route to create new thread
router.post('/', requireAuth, threadController.createThread);

//Route to get all threads
router.get('/', requireAuth, threadController.getAllThreads);

//Route to update thread
router.put('/:id', requireAuth, threadController.updateThread);

//Route to delete a thread
router.delete('/:id', requireAuth, threadController.deleteThread);

module.exports = router;
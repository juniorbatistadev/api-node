var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.js');
var checkAuth = require('../middleware/check-auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res , next){
  userController.login(req, res);
});

router.post('/signup', function(req, res, next){
  userController.signUp(req,res);
});

router.get('/:username', function(req, res , next){
  userController.getUserByUsername(req, res);
})

module.exports = router;

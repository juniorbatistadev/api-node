var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.js');

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

module.exports = router;

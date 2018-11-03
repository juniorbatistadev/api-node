var express = require('express');
var router = express.Router();
var postController = require('../controllers/post.js');
var checkAuth = require('../middleware/check-auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
    postController.getPosts(req, res);
});

router.post('/create', checkAuth, function(req, res , next){
  postController.create(req, res);
});


  

module.exports = router;

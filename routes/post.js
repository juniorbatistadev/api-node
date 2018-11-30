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

router.post('/:postId/comment', checkAuth, function(req, res , next){
    postController.commentPost(req, res);
  });

router.get('/:postId/comments', function(req, res, next) {
    postController.getComments(req, res);
});

router.post('/:postId/like', checkAuth, function(req, res , next){
    postController.likePost(req, res);
  });
  

module.exports = router;

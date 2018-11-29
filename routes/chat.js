var express = require('express');
var router = express.Router();
var chatController = require('../controllers/chat.js');
var checkAuth = require('../middleware/check-auth');

router.get('/', function(req, res, next) {
    chatController.mensajesChat(req, res);
});

router.post('/enviar', function(req, res, next) {
    chatController.enviar(req, res);
});


  

module.exports = router;

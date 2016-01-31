var express = require('express');
var router = express.Router();
var wechat = require('./wechat')
var gameController = require('./gameController')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/game', gameController.checkAuthorize, gameController.getGameView)
router.post('/wechat',wechat.example)
router.get('/wechat', wechat.check)
router.get('/config', gameController.configExample)

module.exports = router;

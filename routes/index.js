var express = require('express');
var router = express.Router();
var wechat = require('./wechat')
var gameController = require('./gameController')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/monster/:id', gameController.updateMonster);
router.get('/monster/:id', gameController.monster)
router.get('/game', gameController.checkAuthorize, gameController.getGameView)
router.post('/wechat',wechat.example)
router.get('/wechat', wechat.check)
router.get('/config', gameController.configExample)
router.get('/gametest', function (req, res, next) {
  res.render('newyear', {env: 'develop'})
})

module.exports = router;

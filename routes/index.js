var express = require('express');
var router = express.Router();
var wechat = require('./wechat')
var gameController = require('./gameController')

var env = process.env.NODE_ENV;
env = env?env:'development'

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('Newyear', {
    title: 'Express' ,
    env:env
  });
});
router.post('/monster/:id', gameController.updateMonster);
router.get('/make', gameController.make)
router.get('/monster/:id', gameController.monster)
router.get('/game/:id', gameController.checkAuthorize, gameController.getGameView)
router.post('/wechat',wechat.example)
router.get('/wechat', wechat.check)
router.get('/config', gameController.configExample)
router.get('/gametest', function (req, res, next) {
  var enemy = {
    type: 1,
    ownerid: 'guoshencheng',
    property1: 0,
    property2: 0,
    property3: 0,
    property4: 0,
    property5: 0,
    ownerNickName:'申成',
    beat: 2000
  }
  var mymonster = {
    type: 0,
    ownerid: 'zhouyunge',
    property1: 0,
    property2: 0,
    property3: 0,
    property4: 0,
    property5: 0,
    ownerNickName:'申成',
    beat: 2000
  }
  var user = {
    headimageurl: 'http://wx.qlogo.cn/mmopen/ibmczicnViagpMia4Y4gUSibSEYOxaCCxqQWibWKVuxo2dhTEiaW73F7rntMcTjVLtth2X6k76icZDNOpUt03QXzwUzsqn94EQYBasgB/0',
    nickname: '申成',
    opendid: 'guoshencheng'
  }
  res.render('newyear', {env: 'develop', mymonster:mymonster, enemy: enemy, user: user})
})



module.exports = router;

var express = require('express');
var router = express.Router();
//wx6f6c7828adb6b4a4
//73769a30f5e2ba3114f8e5f04f19bcc8
var WechatAPI = require('wechat-api')
var api = new WechatAPI('wx6f6c7828adb6b4a4', '73769a30f5e2ba3114f8e5f04f19bcc8')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/config', function(req, res, next) {
  var param = {
    debug: true,
    jsApiList: ['translateVoice', 'playVoice', 'pauseVoice', 'stopVoice', 'onVoicePlayEnd', 'uploadVoice', 'downloadVoice'],
    url: 'http://game.easyell.com'
  }
  api.getJsConfig(param, function(err, result) {
    if (err) console.log(err)
    console.log(result)
    res.json(result)
  })
})

module.exports = router;

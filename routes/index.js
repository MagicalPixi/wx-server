var express = require('express');
var router = express.Router();
var wechat = require('wechat')
var WechatAPI = require('wechat-api')

var wxConfig = require('../config').wx
var config = {
  token: wxConfig.token,
  appid: wxConfig.appid,
  encodingAESKey: wxConfig.encodingAESKey
}

var api = new WechatAPI(wxConfig.appid, wxConfig.secretKey)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/wechat', wechat(config, wechat.text(function(message, req, res, next) {
  res.reply({
    type: 'text',
    content: '别乱玩，会出事的'
  })
})))

router.get('/wechat', wechat(config, wechat.text(function(message, req, res, next) {
})))

router.get('/config', function(req, res, next) {
  var param = {
    debug: true,
    jsApiList: ['translateVoice', 'startRecord', 'stopRecord', 'playVoice', 'pauseVoice', 'stopVoice', 'onVoicePlayEnd', 'uploadVoice', 'downloadVoice'],
    url: 'http://wx.easyell.com/config'
  }
  api.getJsConfig(param, function(err, result) {
    if (err) console.log(err)
    res.render('index', {config: result})
  })
})

module.exports = router;

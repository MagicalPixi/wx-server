var express = require('express');
var router = express.Router();
var wechat = require('wechat')
var WechatAPI = require('wechat-api')
var OAuth = require('wechat-oauth')
var wxConfig = require('../config').wx
var fs = require('fs')
var model = require('../models')
var domin = 'http://wx.easyell.com/'

var config = {
  token: wxConfig.token,
  appid: wxConfig.appid,
  encodingAESKey: wxConfig.encodingAESKey
}

var api = new WechatAPI(wxConfig.appid, wxConfig.secretKey, function (callback) {
  var Token = model.Token
  Token.findOne({name: 'renyan'}, callback)
}, function (token, callback) {
  var Token = model.Token
  Token.findOne({name: 'renyan'}, function(e, v) {
    v = v || new Token({name: 'renyan'})
    v.accessToken = token.accessToken
    v.expireTime = token.expireTime
    v.save(callback)
  })
});

var oauthApi = new OAuth('appid', 'secret', function (openid, callback) {
  fs.readFile(openid +':access_token.txt', 'utf8', function (err, txt) {
    if (err) {return callback(err);}
    callback(null, JSON.parse(txt));
  });
}, function (openid, token, callback) {
  fs.writeFile(openid + ':access_token.txt', JSON.stringify(token), callback);
});

router.get('/gameUrl', function(req, res, next) {
  var url = oauthApi.getAuthorizeURL(domin + 'game', '123', 'snsapi_base');
  res.redirect(url)
})

router.get('/game', function(req, res, next) {
  res.json('hello world')
})

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

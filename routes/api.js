/**
 * Created by guoshencheng on 1/31/16.
 */
var WechatAPI = require('wechat-api')
var wxConfig = require('../config').wx
var model = require('../models')

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
})

module.exports = api
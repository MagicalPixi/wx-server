/**
 * Created by guoshencheng on 1/31/16.
 */

var wechat = require('wechat')
var wxConfig = require('../config').wx
var config = {
  token: wxConfig.token,
  appid: wxConfig.appid,
  encodingAESKey: wxConfig.encodingAESKey
}

var example = wechat(config, wechat.text(function(message, req, res, next) {
  res.reply({
    type: 'text',
    content: '别乱玩，会出事的'
  })
}))

var check = wechat(config, wechat.text(function(message, req, res, next) {

}))

module.exports = {
  example: example,
  check: check
}
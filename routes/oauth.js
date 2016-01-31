/**
 * Created by guoshencheng on 1/31/16.
 */
var OAuth = require('wechat-oauth')
var wxConfig = require('../config').wx
var model = require('../models')
var oauth = new OAuth(wxConfig.appid, wxConfig.secretKey, function (openid, callback) {
  var User = model.User
  User.findOne({openid: openid}, function(err, result) {
    if (err) return callback(err)
    callback(null, result.token)
  })
}, function (openid, token, callback) {
  var User = model.User
  User.findOne({openid: openid}, function(err, result) {
    result = result || new User({openid: openid})
    result.token = token
    result.save(callback)
  })
});

module.exports = oauth
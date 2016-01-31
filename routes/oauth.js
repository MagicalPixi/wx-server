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
  createOrSaveUser(openid, token, callback)
});

var createOrSaveUser = function(openid, token, callback) {
  var User = model.User
  User.findOne({openid: openid}, function(err, result) {
    result = result || new User({openid: openid})
    result.token = token
    result.save(function (err, result) {
      if (callback) callback()
    })
  })
}

var createOrSaveMonster = function(openid, callback) {
  var Monster = model.Monster
  Monster.findOne({ownerid: openid}, function(err, result) {
    result = result || new Monster({ownerid: openid, property1: 0, property2: 0, property3: 0, property4: 0, property5: 0})
    result.type = randomType()
    result.save(callback)
  })
}

var randomType = function() {
  return parseInt(Math.random() * 4)
}

module.exports = oauth
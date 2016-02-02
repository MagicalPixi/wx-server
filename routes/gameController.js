var api = require('./api')
var oauth = require('./oauth')
var model = require('../models')
var domin = 'http://wx.easyell.com'

var authorize = function(res) {
  var url = oauth.getAuthorizeURL(domin + '/game', '123', 'snsapi_userinfo');
  res.redirect(url)
}

var checkAuthorize = function(req, res, next) {
  var code = req.query.code
  if (code) {
    oauth.getUserByCode(code, function (err, result) {
      if(err) {
        authorize(res)
      } else  {
        res.userInfo = result
        var User = model.User
        User.findOne({openid: result.openid}, function(a, user) {
          user = user || new User({openid: openid})
          user.nickname = result.nickname
          user.headimgurl = result.headimgurl
          user.sex = result.sex
          user.save(function(e, v) {
            createOrSaveMonster(result.openid, function(e, v) {
              next()
            })
          })
        })
      }
    })
  } else  {
    authorize(res)
  }
}

var updateMonster = function(req, res, next) {
  var openid = req.params.id
  var monster = req.body
  createOrSaveMonster(openid, monster, function(err, result) {
    res.json(result)
  })
}

var monster = function(req, res, next) {
  var openid = req.params.id
  getMonster(openid, function(err, result) {
    res.json(result)
  })
}

var getGameView = function(req, res, next) {
  var param = {
    debug: true,
    jsApiList: ['translateVoice', 'startRecord', 'stopRecord', 'playVoice', 'pauseVoice', 'stopVoice', 'onVoicePlayEnd', 'uploadVoice', 'downloadVoice'],
    url: domin + req.originalUrl
  }
  api.getJsConfig(param, function(err, result) {
    if (err) console.log(err)
    res.render('index', {config: result})
  })
}

var configExample = function(req, res, next) {
  var param = {
    debug: true,
    jsApiList: ['translateVoice', 'startRecord', 'stopRecord', 'playVoice', 'pauseVoice', 'stopVoice', 'onVoicePlayEnd', 'uploadVoice', 'downloadVoice'],
    url: 'http://wx.easyell.com/config'
  }
  api.getJsConfig(param, function(err, result) {
    if (err) console.log(err)
    res.render('index', {config: result})
  })
}

var createOrSaveMonster = function(openid, monster, callback) {
  var Monster = model.Monster
  Monster.findOne({ownerid: openid}, function(err, result) {
    result = result || new Monster({ownerid: openid, property1: 0, property2: 0, property3: 0, property4: 0, property5: 0})
    result.type = result.type || randomType()
    result.property1 = monster.property1
    result.property2 = monster.property2
    result.property3 = monster.property3
    result.property4 = monster.property4
    result.property5 = monster.property5
    result.save(callback)
  })
}

var getMonster = function(openid, callback) {
  var Monster = model.Monster
  Monster.findOne({ownerid: openid}, callback)
}

var randomType = function() {
  return parseInt(Math.random() * 4)
}

module.exports = {
  getGameView: getGameView,
  checkAuthorize: checkAuthorize,
  configExample: configExample,
  updateMonster: updateMonster,
  monster: monster
}
var api = require('./api')
var oauth = require('./oauth')
var model = require('../models')
var domin = 'http://wx.easyell.com'

var authorize = function(req, res) {
  var url = oauth.getAuthorizeURL(domin + '/game/' + req.params.id, '123', 'snsapi_userinfo');
  res.redirect(url)
}

var checkAuthorize = function(req, res, next) {
  var code = req.query.code
  if (code) {
    oauth.getUserByCode(code, function (err, result) {
      if(err) {
        authorize(req, res)
      } else  {
        var User = model.User
        User.findOne({openid: result.openid}, function(a, user) {
          user = user || new User({openid: openid})
          user.nickname = result.nickname
          user.headimgurl = result.headimgurl
          user.sex = result.sex
          user.save(function(e, v) {
            req.userInfo = v
            next()
          })
        })
      }
    })
  } else  {
    authorize(req, res)
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

var randomType = function() {
  return parseInt(Math.random() * 4)
}

var monster1 = {
  property1:1,
  property1:1,
  property1:1,
  property1:1,
  property1:1,
  type: randomType(),
  beat: 2000,
  ownerNickName: '人言驯兽师',
  ownerid:'renyan1'
}
var monster2 = {
  property1:0,
  property1:0,
  property1:1,
  property1:1,
  property1:1,
  type: randomType(),
  beat: 2000,
  ownerNickName: '人言驯兽师',
  ownerid:'renyan2'
}

var monster3 = {
  property1:0,
  property1:1,
  property1:1,
  property1:1,
  property1:0,
  type: randomType(),
  beat: 2000,
  ownerNickName: '人言驯兽师',
  ownerid:'renyan3'
}

var monster4 = {
  property1:1,
  property1:0,
  property1:1,
  property1:0,
  property1:1,
  type: randomType(),
  beat: 2000,
  ownerNickName: '人言驯兽师',
  ownerid:'renyan4'
}

var monsters = [monster1, monster2, monster3, monster4]

var getGameView = function(req, res, next) {
  var openid = req.params.id
  var param = {
    debug: true,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
    url: domin + req.originalUrl
  }
  api.getJsConfig(param, function(err, result) {
    if (err) console.log(err)
    var user = req.userInfo
    if (id == 'create') {
      var newMonster = monsters[randomType()]
      createOrSaveMonster(newMonster.ownerid, newMonster, function(err, enemy) {
        getMonster(user.openid, function(err, mymonster) {
          res.render('newyear', {env: process.env.NODE_ENV?process.env.NODE_ENV:'development', config: result, mymonster: mymonster, enemy: enemy, user: user})
        })
      })
    } else {
      getMonster(user.openid, function(err, mymonster) {
        getMonster(openid, function(err, enemy) {
          res.render('newyear', {env: process.env.NODE_ENV?process.env.NODE_ENV:'development', config: result, mymonster: mymonster, enemy: enemy, user: user})
        })
      })
    }
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
    var user = req.userInfo
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
    if(monster.ownerNickName) result.ownerNickName = monster.ownerNickName
    if(monster.beat) result.beat = monster.beat
    result.save(callback)
  })
}

var getMonster = function(openid, callback) {
  var Monster = model.Monster
  Monster.findOne({ownerid: openid}, callback)
}

module.exports = {
  getGameView: getGameView,
  checkAuthorize: checkAuthorize,
  configExample: configExample,
  updateMonster: updateMonster,
  monster: monster
}
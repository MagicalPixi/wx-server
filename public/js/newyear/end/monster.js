/**
 * Created by guoshencheng on 2/7/16.
 */

var ajax = require('../../ajax')
var params = require('./params')
var monster ;
var enemyMonsterType = parseInt(window.mymonster.type);
var share_text = require('../../../sprites/share_text')
if( enemyMonsterType === 0){
  monster = require('../../../sprites/dragon');
}
if(enemyMonsterType === 1){
  monster = require('../../../sprites/bear');
}
if(enemyMonsterType === 2){
  monster = require('../../../sprites/monkey');
}
if(enemyMonsterType === 3){
  monster = require('../../../sprites/snake');
}


var white = require('../../../sprites/white')
var rich = require('../../../sprites/rich')
var handsom = require('../../../sprites/handsom')
var tall = require('../../../sprites/tall')
var beautiful = require('../../../sprites/beautiful')
var enemyMonsterAction = require('../../../actions/enemyMonsterAction')
var name = new PIXI.Text(window.user.nickname, {
  font: '30px Arial',
  fill: 0x666666,
  align: 'left'
})
name.x = 320
name.y = 707

var getProperty = new PIXI.Text(window.user.nickname, {
  font: '30px Arial',
  fill: 0x666666,
  align: 'left'
})
getProperty.x = 145
getProperty.y = 770

var myMonster = new PIXI.Container()
myMonster.addChild(monster)
myMonster.addChild(tall)
myMonster.addChild(rich)
myMonster.addChild(handsom)
myMonster.addChild(white)
myMonster.addChild(beautiful)
myMonster.addChild(name)
myMonster.addChild(getProperty)
myMonster.addChild(share_text)
enemyMonsterAction(myMonster)
var tags = ['高', '富', '帅', '白', '美']
var upgradeIndex = 100
var shareText
myMonster.update = function (beat) {
  if (beat) {
    name.text = window.enemymonster.ownerNickName
    addNewProperty()
    if (upgradeIndex < tags.length - 1) {
      shareText = '就在刚才' + window.user.nickname + '弄死了'
        + window.enemymonster.ownerNickName + '的年兽,' + '恭喜你获得了\' ' + tags[upgradeIndex] + "'的属性, 成功的阻止了年兽的肆虐!"
      getProperty.text = tags[upgradeIndex]
    } else if(upgradeIndex == 100) {
      shareText = '就在刚才,' + window.user.nickname + ' 弄死了 '+ window.enemymonster.ownerNickName + '的年兽!' +
        '恭喜获得了所有属性, \'高\' \'富\' \'帅\' \'白\'' +
        ' \'美\' 于一身'
      getProperty.text = '全部'
    } else {
      getProperty.text = '萌萌哒'
      shareText = '就在刚才,' + window.user.nickname + ' 弄死了 ' + window.enemymonster.ownerNickName + '的年兽!' +
        '但他并没有获得属性!'
    }
  } else {
    name.text = '自己'
    getProperty.text = '再来一把'
    shareText = '就在刚才, ' + window.user.nickname + ' 的年兽被 '+ window.enemymonster.ownerNickName +'的年兽 弄死了'
  }
  var  share_imageurls = ['http://7u2min.com1.z0.glb.clouddn.com/monster_game_icon.png',
  'http://7u2min.com1.z0.glb.clouddn.com/share_icon_bear.png',
  'http://7u2min.com1.z0.glb.clouddn.com/share_icon_monkey.png',
  'http://7u2min.com1.z0.glb.clouddn.com/share_icon_snake.png']
  console.log(shareText)
  wx.onMenuShareTimeline({
    title: shareText, // 分享标题
    link: 'http://wx.easyell.com/game/' + window.user.openid, // 分享链接
    imgUrl: share_imageurls[window.mymonster.type], // 分享图标
    success: function () {
      // 用户确认分享后执行的回调函数
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  });
  wx.onMenuShareAppMessage({
    title: shareText, // 分享标题
    link: 'http://wx.easyell.com/game/' + window.user.openid, // 分享链接
    imgUrl: share_imageurls[window.mymonster.type], // 分享图标
    success: function () {
      // 用户确认分享后执行的回调函数
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  });

  var mymonster = window.mymonster
  tall.gotoAndStop(mymonster.property1)
  rich.gotoAndStop(mymonster.property2)
  handsom.gotoAndStop(mymonster.property3)
  white.gotoAndStop(mymonster.property4)
  beautiful.gotoAndStop(mymonster.property5)
  ajax('http://wx.easyell.com/monster/' + window.user.openid).post(mymonster).then(function (data) {
    console.log(data)
  })
}

var properties = ['property1', 'property2', 'property3'
  , 'property4', 'property5']

var addNewProperty = function() {
  var array = []
  var count = 0
  for (var i = 0; i < properties.length; i++) {
    var property = properties[i]
    if (window.mymonster[property] == 0 && window.enemymonster[property] != 0) {
      array.push(i)
    }
    if (window.mymonster[property] == 1) {
      count ++
    }
  }
  if (array.length > 0) {
    var index = Math.random() * array.length
    window.mymonster[array[index]] = 1;
    upgradeIndex = array[index]
  } else if(count != 5) {
    upgradeIndex = 101
  } else {
    upgradeIndex = 100
  }
  window.mymonster.beat ++
  window.mymonster.ownerNickName = window.user.nickname
}

module.exports = myMonster


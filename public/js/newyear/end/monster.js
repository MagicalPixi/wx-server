/**
 * Created by guoshencheng on 2/7/16.
 */

var params = require('./params')
var monster ;
var enemyMonsterType = parseInt(window.enemymonster.type);
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
var description = new PIXI.Text('Thomas 的邋遢兽！\n' +
  '他已战胜了539个敌人，害怕生活\n' +
  '在干净的环境里，善于放鞭炮', {
  font: '30px Arial',
  fill: 0x666666,
  align: 'left'
})

description.anchor.x = 0.5
description.x = 320
description.y = 700

var myMonster = new PIXI.Container()
myMonster.addChild(monster)
myMonster.addChild(tall)
myMonster.addChild(rich)
myMonster.addChild(handsom)
myMonster.addChild(white)
myMonster.addChild(beautiful)
myMonster.addChild(description)
enemyMonsterAction(myMonster)

myMonster.update = function (beat) {
  if (beat) {
    addNewProperty()
  } else {

  }
  var mymonster = window.mymonster
  tall.gotoAndStop(mymonster.property1)
  rich.gotoAndStop(mymonster.property2)
  handsom.gotoAndStop(mymonster.property3)
  white.gotoAndStop(mymonster.property4)
  beautiful.gotoAndStop(mymonster.property5)
}

var properties = ['property1', 'property2', 'property3'
  , 'property4', 'property5']

var addNewProperty = function() {
    properties.map(function(property) {
      if (window.mymonster[property] == 0) {
        window.mymonster[property] = 1
      }
    })
  window.mymonster.beat ++
  window.mymonster.ownerNickName = window.user.nickname
}

module.exports = myMonster


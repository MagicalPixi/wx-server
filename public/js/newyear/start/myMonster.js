/**
 * Created by guoshencheng on 2/7/16.
 */

var monster_description = require('../../../sprites/monster_description')
var white = require('../../../sprites/white')
var rich = require('../../../sprites/rich')
var handsom = require('../../../sprites/handsom')
var tall = require('../../../sprites/tall')
var beautiful = require('../../../sprites/beautiful')
var myMonsterAction = require('../../../actions/myMonsterAction')
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
monster_description.x = 320
myMonster.addChild(monster_description)
myMonster.addChild(tall)
myMonster.addChild(rich)
myMonster.addChild(handsom)
myMonster.addChild(white)
myMonster.addChild(beautiful)
myMonster.addChild(description)
myMonsterAction(myMonster)

myMonster.speed = 0;
myMonster.inStage = false
myMonster.walkIn = function() {
  this.speed = 5
};

var checkIn= function() {
  if ((!myMonster.inStage) && myMonster.x < 320 + myMonster.speed && myMonster.x > 320 - myMonster.speed ) {
    myMonster.x = 320
    myMonster.speed = 0
    myMonster.inStage = true
  }
}

myMonster.appear = function() {
  this.speed = 5
  console.log(1111111)
}

myMonster.render = function () {
  this.x -= this.speed
  checkIn()
  this.children.forEach(function (child) {
    if (child.render) child.render()
  });
}

module.exports = myMonster


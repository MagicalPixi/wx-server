/**
 * Created by guoshencheng on 2/7/16.
 */

var monster_description = require('../../../sprites/monster_description')
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

var enemyMonster = new PIXI.Container()
monster_description.x = 320
enemyMonster.addChild(monster_description)
enemyMonster.addChild(tall)
enemyMonster.addChild(rich)
enemyMonster.addChild(handsom)
enemyMonster.addChild(white)
enemyMonster.addChild(beautiful)
enemyMonster.addChild(description)
enemyMonsterAction(enemyMonster)

enemyMonster.speed = 0;
enemyMonster.inStage = false
enemyMonster.walkIn = function() {
  this.speed = 5
};

var checkIn= function() {
  if ((!enemyMonster.inStage) && enemyMonster.x < 320 + enemyMonster.speed && enemyMonster.x > 320 - enemyMonster.speed ) {
    enemyMonster.x = 320
    enemyMonster.speed = 0
    enemyMonster.inStage = true
  }
}

enemyMonster.appear = function() {
  this.speed = 5
  console.log(1111111)
}

enemyMonster.render = function () {
  this.x -= this.speed
  checkIn()
  this.children.forEach(function (child) {
    if (child.render) child.render()
  });
}

module.exports = enemyMonster


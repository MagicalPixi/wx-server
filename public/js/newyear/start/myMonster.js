/**
 * Created by guoshencheng on 2/7/16.
 */

var monster_description = require('../../../sprites/monster_description')
var white = require('../../../sprites/white')
var rich = require('../../../sprites/rich')
var handsom = require('../../../sprites/handsom')
var tall = require('../../../sprites/tall')
var beautiful = require('../../../sprites/beautiful')

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

module.exports = myMonster


/**
 * Created by guoshencheng on 2/7/16.
 */

var monster = require('../../../sprites/monkey')
var white = require('../../../sprites/white')
var rich = require('../../../sprites/rich')
var handsom = require('../../../sprites/handsom')
var tall = require('../../../sprites/tall')
var beautiful = require('../../../sprites/beautiful')
var enemyMonsterAction = require('../../../actions/enemyMonsterAction')

var fuckHimAction = require('../../../actions/fuckHimAction');

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
enemyMonsterAction(enemyMonster)


var fuckHim = require('../../../sprites/fuck_him');
fuckHimAction(fuckHim);

enemyMonster.addChild(monster)
enemyMonster.addChild(tall)
enemyMonster.addChild(rich)
enemyMonster.addChild(handsom)
enemyMonster.addChild(white)
enemyMonster.addChild(beautiful)
enemyMonster.addChild(description)
enemyMonster.addChild(fuckHim);

module.exports = enemyMonster


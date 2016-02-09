/**
 * Created by guoshencheng on 2/7/16.
 */

var text = require('../text')

var monster ;
if(window.enemymonster.type === 0){
  monster = require('../../../sprites/dragon');
}
if(window.enemymonster.type === 1){
  monster = require('../../../sprites/bear');
}
if(window.enemymonster.type === 2){
  monster = require('../../../sprites/monkey');
}
if(window.enemymonster.type === 3){
  monster = require('../../../sprites/snake');
}

var white = require('../../../sprites/white')
var rich = require('../../../sprites/rich')
var handsom = require('../../../sprites/handsom')
var tall = require('../../../sprites/tall')
var beautiful = require('../../../sprites/beautiful')
var enemyMonsterAction = require('../../../actions/enemyMonsterAction')

var fuckHimAction = require('../../../actions/fuckHimAction');

var description = new PIXI.Text(
  window.enemymonster.ownerNickName + '的' + text.texts[window.enemymonster.type] + '\n他已战胜了' + window.enemymonster.beat + '个敌人', {
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


/**
 * Created by guoshencheng on 2/7/16.
 */

var text = require('../text')

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
var fuckHimAction = require('../../../actions/fuckHimAction');
var monster_enemy_texts = [require('../../../sprites/dragon_enemy_text'),
require('../../../sprites/bear_enemy_text'),
require('../../../sprites/monkey_enemy_text'),
require('../../../sprites/snake_enemy_text')]
var ownerName = new PIXI.Text(
  window.enemymonster.ownerNickName ,{
    font: '30px Arial',
    fill: 0x000000,
    align: 'left'
  })

var beatCount = new PIXI.Text(
  window.enemymonster.beat ,{
    font: '30px Arial',
    fill: 0x000000,
    align: 'left'
  })

ownerName.y = 707
ownerName.x = 100
beatCount.x = 300
beatCount.y = 840
var enemyMonster = new PIXI.Container()
enemyMonsterAction(enemyMonster)

tall.gotoAndStop(window.enemymonster.property1)
rich.gotoAndStop(window.enemymonster.property2)
handsom.gotoAndStop(window.enemymonster.property3)
white.gotoAndStop(window.enemymonster.property4)
beautiful.gotoAndStop(window.enemymonster.property5)

var fuckHim = require('../../../sprites/fuck_him');
fuckHimAction(fuckHim);

enemyMonster.addChild(monster)
enemyMonster.addChild(tall)
enemyMonster.addChild(rich)
enemyMonster.addChild(handsom)
enemyMonster.addChild(white)
enemyMonster.addChild(beautiful)
enemyMonster.addChild(fuckHim);
enemyMonster.addChild(ownerName)
enemyMonster.addChild(beatCount)
enemyMonster.addChild(monster_enemy_texts[window.enemymonster.type])
module.exports = enemyMonster


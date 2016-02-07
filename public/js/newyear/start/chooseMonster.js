/**
 * Created by guoshencheng on 2/4/16.
 */
var chooseBar = require('./chooseBar')
var monster_description = require('../../../sprites/monster_description')
var chooseMonster = new PIXI.Container()

chooseMonster.addChild(chooseBar)
chooseMonster.addChild(monster_description);

var chooseBarAction = require('../../../actions/chooseBarAction');
var monster_descriptionAction = require('../../../actions/monster_descriptionAction');

chooseBarAction(chooseBar);
monster_descriptionAction(monster_description);
var description = new PIXI.Text('邋遢兽！害怕生活\n' +
  '在干净的环境里，善于放鞭炮', {
  font: '30px Arial',
  fill: 0x666666,
  align: 'left'
})

description.anchor.x = 0.5
description.x = 320
description.y = 700
chooseMonster.addChild(description)
//chooseMonster.appear = function(parent) {
//  parent.addChild(this)
//  chooseBar.appear()
//  monster_description.walkIn()
//}

chooseMonster.render = function () {
  this.children.forEach(function (child) {
    if (child.render) child.render()
  });
}

module.exports = chooseMonster
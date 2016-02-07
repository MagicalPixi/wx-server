/**
 * Created by guoshencheng on 2/4/16.
 */
var chooseBar = require('./chooseBar')
var change_monster = require('../../../sprites/change_monster')
var comfirm_monster = require('../../../sprites/comfirm_monster')
var monster_description = require('../../../sprites/monster_description')
var monkey_description = require('../../../sprites/monkey_description')
var bear_description = require('../../../sprites/bear_description')
var snake_decription = require('../../../sprites/snake_description')

var chooseMonster = new PIXI.Container()

// change_monster
change_monster.on('touchstart', function() {
  this.gotoAndStop(1)
})

change_monster.on('touchend', function() {
  this.gotoAndStop(0)
  if (window.inStage ) {
    chooseMonster.walkOut(function() {
      chooseMonster.walkIn()
    })
  }
});

comfirm_monster.on('touchstart', function() {
  this.gotoAndStop(1)
})

comfirm_monster.on('touchend', function() {
  this.gotoAndStop(0)

})

chooseMonster.addChild(chooseBar)
chooseMonster.addChild(monster_description);
chooseMonster.addChild(monkey_description)
chooseMonster.addChild(bear_description)
chooseMonster.addChild(snake_decription)

var monsters = [monster_description, monkey_description,
bear_description, snake_decription]

var chooseBarAction = require('../../../actions/chooseBarAction');
var monster_descriptionAction = require('../../../actions/monster_descriptionAction');

chooseBarAction(chooseBar);
monster_descriptionAction(monster_description);
monster_descriptionAction(monkey_description);
monster_descriptionAction(bear_description);
monster_descriptionAction(snake_decription);
var description = new PIXI.Text('邋遢兽！害怕生活\n' +
  '在干净的环境里，善于放鞭炮', {
  font: '30px Arial',
  fill: 0x666666,
  align: 'left'
})

description.anchor.x = 0.5
description.x = 320
description.y = 700
chooseMonster.current = 0
chooseMonster.addChild(description)

chooseMonster.walkIn = function () {
  monsters[this.current].walkIn()
}

chooseMonster.walkOut = function (callBack) {
  monsters[this.current].walkOut(callBack)
  this.current ++
  if (this.current > 3) {
    this.current = 0
  }
}

chooseMonster.render = function () {
  this.children.forEach(function (child) {
    if (child.render) child.render()
  });
}

module.exports = chooseMonster
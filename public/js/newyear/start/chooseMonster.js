/**
 * Created by guoshencheng on 2/4/16.
 */

var chooseBar = require('./chooseBar')
var change_monster = require('../../../sprites/change_monster')
var monster_description = require('../../../sprites/monster_description')
var monkey_description = require('../../../sprites/monkey_description')
var bear_description = require('../../../sprites/bear_description')
var snake_decription = require('../../../sprites/snake_description')
var bear_text = require('../../../sprites/bear_text')
var snake_text = require('../../../sprites/snake_text')
var monkey_text = require('../../../sprites/monkey_text')
var dragon_text = require('../../../sprites/dragon_text')
var texts = [dragon_text, bear_text, monkey_text, snake_text]
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

chooseMonster.addChild(chooseBar)
chooseMonster.addChild(monster_description);
chooseMonster.addChild(monkey_description)
chooseMonster.addChild(bear_description)
chooseMonster.addChild(snake_decription)

var monsters = [monster_description,
bear_description,monkey_description, snake_decription]

var chooseBarAction = require('../../../actions/chooseBarAction');
var monster_descriptionAction = require('../../../actions/monster_descriptionAction');

chooseBarAction(chooseBar);
monster_descriptionAction(monster_description);
monster_descriptionAction(monkey_description);
monster_descriptionAction(bear_description);
monster_descriptionAction(snake_decription);
chooseMonster.current = 0
chooseMonster.addChild(chooseBar)

chooseMonster.walkIn = function () {
  monsters[this.current].walkIn()
  this.addChild(texts[this.current])
}

chooseMonster.walkOut = function (callBack) {
  monsters[this.current].walkOut(callBack)
  this.removeChild(texts[this.current])
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
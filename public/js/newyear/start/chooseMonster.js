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
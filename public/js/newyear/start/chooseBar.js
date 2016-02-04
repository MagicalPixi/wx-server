/**
 * Created by guoshencheng on 2/4/16.
 */
var change_monster = require('../../../sprites/change_monster')
var comfirm_monster = require('../../../sprites/comfirm_monster')
var chooseBar = new PIXI.Container()
chooseBar.y = 150
chooseBar.speed = 0
chooseBar.acceleration = 0
chooseBar.addChild(change_monster)
chooseBar.addChild(comfirm_monster)
chooseBar.appear = function () {
  this.speed = 5
  this.acceleration = 0.02
}
chooseBar.render = function() {
  this.children.forEach(function (child) {
    if (child.render) child.render()
  });
  this.y -= this.speed
  this.speed -= this.acceleration
  checkApeared()
}

var checkApeared = function () {
  if (chooseBar.y < 0) {
    chooseBar.y = 0
    chooseBar.speed = 0
    chooseBar.acceleration = 0
    if (chooseBar.apeared) chooseBar.apeared()
  }
}

module.exports = chooseBar
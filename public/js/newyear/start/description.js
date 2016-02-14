/**
 * Created by guoshencheng on 2/4/16.
 */
var title = require('../../../sprites/title')
var start = require('../../../sprites/start')
var who = require('../../../sprites/who')
var chooseBar = require('./chooseBar')
var renyan = require('./renyan')
var chooseMonster
if (!window.mymonster) {
  chooseMonster = require('./chooseMonster')
}
var enemyMonster = require('./enemyMonster')
var description = new PIXI.Container()
description.speed = 0
description.isApear = true
description.acceleration = 0
description.addChild(title)
description.addChild(start)
description.addChild(who)
description.render = function () {
  this.children.forEach(function (child) {
    if (child.render) child.render()
  });
  this.y += this.speed
  this.speed += this.acceleration

  checkdrop(this.parent)
}

start.on('touchstart', function() {
  this.gotoAndStop(0)
})

start.on('touchend', function() {
  this.gotoAndStop(1)
  description.acceleration = 0.6
})

who.on('touchstart', function() {
  description.parent.addChild(renyan)
});

var checkdrop = function(stage) {
  if (description.y > 1004) {
    description.speed = 0
    description.acceleration = 0
    if (description.isApear) {
      description.isApear = false;
      //description.destroy();
      if (!window.mymonster) {
        stage.addChild(chooseMonster)
        chooseMonster.walkIn()
        chooseBar.appear()
      } else {
        enemyMonster.appear()
      }
    }
  }
};

module.exports = description


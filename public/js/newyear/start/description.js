/**
 * Created by guoshencheng on 2/4/16.
 */
var title = require('../../../sprites/title')
var start = require('../../../sprites/start')
var who = require('../../../sprites/who')

var description = new PIXI.Container()
description.speed = 0
description.isApear = true
description.acceleration = 0
description.addChild(title)
description.addChild(start)
description.addChild(who)
description.drop = function (acceleration) {
  this.acceleration = acceleration || 0.1
}
description.render = function () {
  this.children.forEach(function (child) {
    if (child.render) child.render()
  });
  this.y += this.speed
  this.speed += this.acceleration
  checkdrop()
}

var checkdrop = function() {
  if (description.y > 1004) {
    description.speed = 0
    description.acceleration = 0
    if (description.isApear && description.dissapear)  {
      description.isApear = false
      description.dissapear()
    }
  }
}

//start action
start.on('touchstart', function() {
  this.gotoAndStop(0)
})

start.on('touchend', function() {
  this.gotoAndStop(1)
  description.drop(0.6)
})


module.exports = description


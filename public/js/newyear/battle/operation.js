/**
 * Created by guoshencheng on 2/4/16.
 */

var attack = require('../../../sprites/attack')
var attack1 = attack({
  texture: 'attack',
  x: 50,
  y: 830,
  anchorx: 0,
  ontouch: function() {
    shock()
  }
})
var attack2 = attack({
  texture: 'attack',
  x: 590,
  y: 830,
  anchorx: 1,
  ontouch: function() {
    boom()
  }
})
var attack3 = attack({
  texture: 'attack',
  x: 50,
  y: 900,
  anchorx: 0,
  ontouch: function() {
    wagTail()
  }
})
var attack4 = attack({
  texture: 'attack',
  x: 590,
  y: 900,
  anchorx: 1,
  ontouch: function() {
    squirm()
  }
})
var operation = new PIXI.Container()
operation.addChild(attack1)
operation.addChild(attack2)
operation.addChild(attack3)
operation.addChild(attack4)

module.exports = operation

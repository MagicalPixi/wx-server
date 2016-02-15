/**
 * Created by guoshencheng on 2/11/16.
 */
var boom = require('./boom')
var clean = require('./clean')
var scream = require('./scream')
var fire = require('../../../../sprites/fire')
var params = require('./params')
var enemyMonster = new PIXI.Container()
enemyMonster.sprites = [boom, scream, fire, clean]
enemyMonster.addChild(clean)
enemyMonster.randomAttack = function() {
  var randomAttackIndex = parseInt(Math.random() * (params.attack.length - 1))
  enemyMonster[params.attack[randomAttackIndex]]()
  return randomAttackIndex
}

module.exports = enemyMonster
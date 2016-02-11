/**
 * Created by guoshencheng on 2/6/16.
 */

var boom = require('./boom')
var clean = require('./clean')
var dead = require('./dead')
var scream = require('./scream')
var fire = require('../fire')
var myMonster = new PIXI.Container()

myMonster.sprites = [boom, scream, fire, clean, dead]

myMonster.addChild(clean)

module.exports = myMonster
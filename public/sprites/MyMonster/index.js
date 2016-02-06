/**
 * Created by guoshencheng on 2/6/16.
 */
var angry = require('./angry')
var awkaward = require('./awkaward')
//var blink = require('./blink')
//var boom = require('./boom')
//var clean = require('./clean')
//var dead = require('./dead')
//var round = require('./round')
//var scream = require('./scream')
//var shake = require('./shake')
//var tail = require('./tail')

var myMonster = new PIXI.Container()

myMonster.addChild(angry)

module.exports = myMonster
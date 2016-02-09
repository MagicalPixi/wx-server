/**
 * Created by guoshencheng on 2/6/16.
 */
var angry = require('./angry')
var awkward = require('./awkward')
var blink = require('./blink')
var boom = require('./boom')
var clean = require('./clean')
var dead = require('./dead')
var round = require('./round')
var scream = require('./scream')
var shake = require('./shake')
var tail = require('./tail')
var params = require('./params')
var myMonster = new PIXI.Container()
var sprites = [boom, tail, blink, scream, angry, awkward, clean, dead, round, shake]
  params.attack.forEach(function (name,i) {
  var obj = sprites[i]
  if (name == 'boom') {
    obj.loop = false
  }
  myMonster[name] = function () {
    this.removeChildren();
    this.addChild(obj);
    obj.play();
    setTimeout(function () {
      obj.gotoAndStop(0);
    },2000)
  }
});

myMonster.addChild(angry)

module.exports = myMonster
/**
 * Created by guoshencheng on 2/8/16.
 */
var pixilib = require('pixi-lib')

var fireButton = require('../sprites/fire_button');
var ahhhhButton = require('../sprites/ahhhh_button');
var boomButton = require('../sprites/boom_button');
var cleanButton = require('../sprites/clean_button');
var params = require('../sprites/myMonster/params')

module.exports = pixilib.createAction('myAttack', function start(myMonster) {
  var state = this
  var angry = require('../sprites/MyMonster/angry')
  var awkward = require('../sprites/MyMonster/awkward')
  var blink = require('../sprites/MyMonster/blink')
  var boom = require('../sprites/MyMonster/boom')
  var clean = require('../sprites/MyMonster/clean')
  var dead = require('../sprites/MyMonster/dead')
  var round = require('../sprites/MyMonster/round')
  var scream = require('../sprites/MyMonster/scream')
  var shake = require('../sprites/MyMonster/shake')
  var tail = require('../sprites/MyMonster/tail')
  var params = require('../sprites/MyMonster/params')
  var sprites = [angry, awkward, blink, boom, clean, dead, round, scream, shake, tail]

  state.on('enemyAttackend', function() {
    fireButton.interactive = true
    ahhhhButton.interactive = true
    boomButton.interactive = true
    cleanButton.interactive = true
  })

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
        state.end()
      },2000)
    }
  });


})
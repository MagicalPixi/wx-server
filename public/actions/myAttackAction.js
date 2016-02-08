/**
 * Created by guoshencheng on 2/8/16.
 */
var pixilib = require('pixi-lib')

var fireButton = require('../sprites/fire_button');
var ahhhhButton = require('../sprites/ahhhh_button');
var boomButton = require('../sprites/boom_button');
var cleanButton = require('../sprites/clean_button');
var params = require('../sprites/myMonster/params')

var angry = require('../sprites/myMonster/angry')
var awkward = require('../sprites/myMonster/awkward')
var blink = require('../sprites/myMonster/blink')
var boom = require('../sprites/myMonster/boom')
var clean = require('../sprites/myMonster/clean')
var dead = require('../sprites/myMonster/dead')
var round = require('../sprites/myMonster/round')
var scream = require('../sprites/myMonster/scream')
var shake = require('../sprites/myMonster/shake')
var tail = require('../sprites/myMonster/tail')

module.exports = pixilib.createAction('myAttack', function start(myMonster) {
  var state = this;

  var sprites = [angry, awkward, blink, boom, clean, dead, round, scream, shake, tail];

  state.on('enemyAttackProgress', function() {
    fireButton.interactive = true;
    ahhhhButton.interactive = true;
    boomButton.interactive = true;
    cleanButton.interactive = true;
  });

  //我的HP还有
  state.on('myHpProgress', function() {
  });
  //我的HP扣完了
  state.on('myHpEnd', function() {

  });

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
/**
 * Created by guoshencheng on 2/8/16.
 */
var pixilib = require('pixi-lib')

//var fireButton = require('../sprites/fire_button');
//var ahhhhButton = require('../sprites/ahhhh_button');
//var boomButton = require('../sprites/boom_button');
//var cleanButton = require('../sprites/clean_button');
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
var fire  = require('../sprites/fire')
var explanation = require('../js/newyear/battle/explanation')
module.exports = pixilib.createAction('myAttack', function start(myMonster) {
  var state = this;

  var sprites = [boom, clean, fire, scream, angry, awkward, tail,
    round, shake, dead,blink];
  var fnLen = params.attack.length;

  //按下底部攻击按钮
  state.on('boomAttackProgress', function (attackObj) {
    var index = attackObj.index;
    var index2 = attackObj.index;

    var lose = true;

    var random = Math.random();
    if(random > 0.6){
      lose = false;
      index2 = parseInt(Math.random() * 6 + 4);
      explanation.update(false, false, index2)
    } else {
      explanation.update(false, true, index2)
    }

    var attackName = params.attack[index2];
    if(myMonster[attackName]){
      if(attackName === 'dead'){
        myMonster[params.attack[index]]();
      }else{
        myMonster[attackName](lose);

        if(attackName ==='scream'){
          es();
        }
      }
    }else{
    }
  });

  state.on('myHpStart', function () {
    //if(myMonster.blink){
    //  myMonster.blink();
    //}else if(myMonster.wink){
    //  myMonster.wink();
    //}
  });
  //我的HP扣完了`
  state.on('myHpEnd', function() {
    myMonster.dead && myMonster.dead();
    window.end(false)
  });


  //@TODO 这里与sprites/myMonster 重复了。
  params.attack.forEach(function (name,i) {
    var obj = sprites[i]
    if (name == 'boom') {
      obj.loop = false
    }

    if(name === 'dead') {
      myMonster[name] = function (lose) {
        this.removeChildren();
        this.addChild(obj);
        obj.gotoAndStop(1);
      }

    }else if(name === 'fire'){

      myMonster[name] = function (lose) {
        this.addChild(obj);
        obj.play();


        setTimeout(function () {
          obj.parent.removeChild(obj);

          state.progress(lose)
        },1500)
      }

    }else{
      myMonster[name] = function (lose) {
        this.removeChildren();
        this.addChild(obj);
        obj.play();

        setTimeout(function () {
          obj.gotoAndStop(0);

          state.progress(lose)

        },2000)
      }
    }
  });
});
/**
 * Created by zyg on 16/2/4.
 */
//var boom = require('../../../sprites/boom');
//var shock = require('../../../sprites/shock');
//var wagTail = require('../../../sprites/wagTail');
//var squirm = require('../../../sprites/squirm');
//var wink = require('../../../sprites/wink');
//var sprites = [shock,wagTail,squirm,wink];
//
//var monster = new PIXI.Container();
//
//
//monster.addChild(shock);
//
//monster.boom = function () {
//  monster.removeChildren();
//  monster.addChild(boom);
//  boom.gotoAndPlay(0);
//};
//
//
//['shock','wagTail','squirm','wink'].forEach(function (name,i) {
//
//  var obj = sprites[i];
//
//    monster[name] = function () {
//      this.removeChildren();
//      this.addChild(obj);
//
//      obj.play();
//
//      setTimeout(function () {
//        obj.stop();
//      },2000)
//    }
//  });
var monster = require('../../../sprites/enemy_bear');


module.exports = monster;
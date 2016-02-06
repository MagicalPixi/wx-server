/**
 * Created by guoshencheng on 2/6/16.
 */
var lib = require('pixi-lib');
var game = require('../../../config').game

var sprite = lib.getMc({
  textures:lib.getTextures(game.myMonster + '_dead'),
  "spriteName" : game.myMonster + '_dead',
  "y" : 0 ,
  "scale.y" :  1 ,
  "animationSpeed" :  0.1 ,
  "x" :  0 ,
  "scale.x" :  1 ,
});

module.exports = sprite;
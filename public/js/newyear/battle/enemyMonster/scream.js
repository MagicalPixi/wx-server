/**
 * Created by guoshencheng on 2/11/16.
 */
/**
 * Created by guoshencheng on 2/11/16.
 */
var lib = require('pixi-lib');
var params = require('./params')

var sprite = lib.getMc({
  textures:lib.getTextures(params.enemyMonster + '_ahhhh'),
  "spriteName" : params.enemyMonster + '_ahhhh',
  "y" : -30 ,
  "scale.y" :  1 ,
  "animationSpeed" :  0.1 ,
  "x" :  50 ,
  "scale.x" :  1
});

module.exports = sprite;
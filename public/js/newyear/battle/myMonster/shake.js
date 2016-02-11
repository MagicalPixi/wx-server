/**
 * Created by guoshencheng on 2/6/16.
 */
var lib = require('pixi-lib');
var params = require('./params')

var sprite = lib.getMc({
  textures:lib.getTextures(params.myMonster + '_shake'),
  "spriteName" : params.myMonster + '_shake',
  "y" : 0 ,
  "scale.y" :  1 ,
  "animationSpeed" :  0.1 ,
  "x" :  0 ,
  "scale.x" :  1 ,
});

module.exports = sprite;
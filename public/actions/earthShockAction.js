/**
 * Created by zyg on 16/2/6.
 */
var pixiLib = require('pixi-lib');

module.exports = pixiLib.createAction('earthShock', function (sprite,option) {
  var state = this;

  option = option?option:{};

  var duration = option.duration || 2000;
  var speed = option.speed || 5;

  state.on('', function () {

    es();
  });


  var initialPosition = 0;
  var initialScale = 0;

  var es = function () {

    initialPosition = sprite.position;
    initialScale = sprite.scale;
    sprite.render = function () {

      if((--speed)<0){
        speed = 5
        if(sprite.y%2===0){
          sprite.y -= 11;
          sprite.x -= 11;
          sprite.scale.x = 1.05;
          sprite.scale.y = 1.05;
        }else{
          sprite.y += 11;
          sprite.x += 11;
          sprite.scale.x = 1;
          sprite.scale.y = 1;
        }
      }
    }

    setTimeout(function () {
      sprite.render = '';
      sprite.position = initialPosition;
      sprite.scale = initialScale;

    },duration)
  }

  window.es = es;

});
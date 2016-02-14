/**
 * Created by zyg on 16/2/9.
 */
var pixiLib = require('pixi-lib');

module.exports = pixiLib.createAction('fuckHim', function (btn) {
  var state = this;

  btn.y = 1304;
  btn.appear = false;
  btn.interactive = true;

  var speed = 5;

  btn.render = function () {
    if(!btn.appear){
      btn.y -= speed;

      if(btn.y <= 850){
        btn.y = 850;
        btn.appear = true
      }
    }
  };

  btn.on('touchstart', function () {
    btn.gotoAndStop(1);

  });

  btn.on('touchend', function () {
    btn.gotoAndStop(0);

    state.end();

    battle();
  });

});
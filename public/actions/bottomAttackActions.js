/**
 * Created by zyg on 16/2/6.
 */
var pixiLib = require('pixi-lib');

module.exports = pixiLib.createAction('boomAttack',function start(container,operations) {
  var state = this;

  //临时用的window 4个方法，测试用
  var fns = ['boom','wagTail','wink','shock'];

  operations.forEach(function (buttonObj,i) {

    buttonObj.interactive = true;

    buttonObj.on('touchstart', function () {
      window[fns[i]]();

      buttonObj.gotoAndStop(1);
    })

    buttonObj.on('touchend', function () {
      buttonObj.gotoAndStop(0);
    })

    state.progress(fns[i]);
  })

});

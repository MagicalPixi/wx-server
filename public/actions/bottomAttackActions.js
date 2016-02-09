/**
 * Created by zyg on 16/2/6.
 */
var pixiLib = require('pixi-lib');

module.exports = pixiLib.createAction('boomAttack',function start(container,operations) {
  var state = this;

  //临时用的window 4个方法，测试用
  var fns = ['boom','wagTail','wink','shock'];


  //敌人攻击结束才能按下
  state.on('enemyAttackProgress', function () {


    operations.forEach(function (obj) {
      obj.interactive = true;
    });
  });

  //我方攻击不能按
  function disabledMyAttack() {

    operations.forEach(function (obj) {
      obj.interactive = false;
    });
  }


  operations.forEach(function (buttonObj,i) {

    buttonObj.interactive = true;


    buttonObj.on('touchstart', function () {
      //window[fns[i]]();

      buttonObj.gotoAndStop(1);

      console.log(fns[i]);

      state.progress({
        index:i,
        name:fns[i]
      });
    });

    buttonObj.on('touchend', function () {
      buttonObj.gotoAndStop(0);

      disabledMyAttack();
    })
  })

});

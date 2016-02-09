/**
 * Created by zyg on 16/2/7.
 */
var pixiLib = require('pixi-lib')

module.exports = pixiLib.createAction('myHp', function (myHP) {
  var state = this;

  var i = 9;

  state.on('myHpStart', function () {
    i = 9;
    myHP.gotoAndStop(i);
  });

  window.F1 = function () {
    i = 1;
  };

  state.on('enemyAttackProgress', function (attackName) {

    if(['boom','ahhhh','shock','clean'].indexOf(attackName) !== -1) {
      if(i!==0){
        i--;
      }
      myHP.gotoAndStop(i);
    }

    if(i===0){
      state.end();
    }else{
      state.progress();
    }
  });

});
/**
 * Created by zyg on 16/2/8.
 */
var pixiLib = require('pixi-lib');

module.exports = pixiLib.createAction('enemyHp', function (enemyHp) {
  var state = this;

  var i = 9;

  state.on('enemyHpStart', function () {
    i = 9;
    enemyHp.gotoAndStop(i);
  });

  window.F2 = function () {
    i = 1;
  }

  state.on('myAttackProgress', function (lose) {

    if(lose){
      if(i!==0){
        i--;
      }
      enemyHp.gotoAndStop(i);
    }

    if(i===0){
      state.end();
    }else{
      state.progress();
    }
  });});
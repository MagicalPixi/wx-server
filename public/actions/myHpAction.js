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

  state.on('enemyAttackProgress', function () {

    if(Math.random() > 0.5){
    }
    if(i!==0){
      i--;
    }
    myHP.gotoAndStop(i);

    if(i===0){
      state.end();
    }else{
      state.progress();
    }
  });

});
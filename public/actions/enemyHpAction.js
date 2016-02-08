/**
 * Created by zyg on 16/2/8.
 */
var pixiLib = require('pixi-lib');

module.exports = pixiLib.createAction('enemyHp', function (enemyHp) {
  var state = this;

  var i = 9;

  state.on('myAttackProgress', function () {

    if(Math.random() > 0.5){

    }
    if(i!==0){
      i--;
    }
    enemyHp.gotoAndStop(i);

    if(i===0){
      state.end();
    }else{
      state.progress();
    }
  });});
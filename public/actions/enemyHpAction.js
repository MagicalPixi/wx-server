/**
 * Created by zyg on 16/2/7.
 */
var pixiLib = require('pixi-lib')

module.exports = pixiLib.createAction('enemyHp', function (enemyHp) {
  var state = this;

  var i = 9;

  state.on('enemyAttackProgress', function () {

    if(Math.random() > 0.5){
      enemyHp.gotoAndStop((--i));
    }
  });

});
/**
 * Created by zyg on 16/2/7.
 */
var pixiLib = require('pixi-lib');

module.exports = pixiLib.createAction('enemyAttack', function (enemy,attackFnNames) {
  attackFnNames = attackFnNames.map(function (n) {
    return n.replace('_','');
  }).filter(function (n) {
    return n !== 'dead';
  });

  var state = this;

  var fnLen = attackFnNames.length;

  state.on('myAttackProgress', function () {

    attack();
  });

  state.on('enemyHpStart', function () {
    if(enemy.blink){
      enemy.blink();
    }else if(enemy.wink){
      enemy.wink();
    }
  });

  state.on('enemyHpEnd', function () {
    enemy.dead && enemy.dead();
  });

  window.E = enemy;

  function attack() {

    var randomAttackIndex = parseInt(Math.random() * fnLen);

    enemy[attackFnNames[randomAttackIndex]](function () {

      state.progress();
    });
  }


  window.attck = attack;

});
/**
 * Created by zyg on 16/2/7.
 */
var pixiLib = require('pixi-lib');

module.exports = pixiLib.createAction('enemyAttack', function (enemy,attackFnNames) {

  var state = this;

  var fnLen = attackFnNames.length;

  state.on('myAttackProgress', function () {

    console.log('myAttackProgress');

    attack();
  });

  attackFnNames = attackFnNames.filter(function (n) {
    return n !== 'dead';
  }).map(function (n) {
    return n.replace('_','');
  });

  function attack() {

    var randomAttackIndex = parseInt(Math.random() * fnLen);

    enemy[attackFnNames[randomAttackIndex]](function () {

      state.progress();
    });
  }


  window.attck = attack;

});
/**
 * Created by zyg on 16/2/7.
 */
var pixiLib = require('pixi-lib');

module.exports = pixiLib.createAction('enemyAttack', function (enemy,attackFnNames) {
  attackFnNames = attackFnNames.filter(function (n) {
    return n !== 'dead';
  }).map(function (n) {
    return n.replace('_','');
  });

  var state = this;

  var fnLen = attackFnNames.length;

  function attack() {

    var randomAttackIndex = parseInt(Math.random() * fnLen);

    enemy[attackFnNames[randomAttackIndex]](function () {

      state.progress();
    });
  }

  state.on('myAttack', function () {

    attack();
  });

  window.attck = attack;

});
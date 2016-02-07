/**
 * Created by zyg on 16/2/7.
 */
var pixiLib = require('pixi-lib');

module.exports = pixiLib.createAction('enemyAttack', function (enemy,attackFnNames) {
  attackFnNames = attackFnNames.map(function (n) {
    return n.replace('_','');
  });

  var state = this;

  var fnLen = attackFnNames.length;


  console.log(attackFnNames);

  function attack() {

    var randomAttackIndex = parseInt(Math.random() * fnLen);

    enemy[attackFnNames[randomAttackIndex]](function () {

      state.end();
    });
  }

  state.on('', function () {

    attack();
  });

  window.attck = attack;

});
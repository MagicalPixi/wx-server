/**
 * Created by zyg on 16/2/6.
 */
var fireButton = require('../../../sprites/fire_button');
var ahhhhButton = require('../../../sprites/ahhhh_button');
var boomButton = require('../../../sprites/boom_button');
var cleanButton = require('../../../sprites/clean_button');
var enemyMonster = require('./enemyMonster')

var operation = new PIXI.Container();

var buttons = {
  fire: fireButton,
  scream: ahhhhButton,
  boom: boomButton,
  clean: cleanButton
}

var buttonKey = function(button) {
  for(var key in buttons) {
    if (button === buttons[key]) return key
  }
}

operation.addChild(fireButton);
operation.addChild(ahhhhButton);
operation.addChild(boomButton);
operation.addChild(cleanButton);

operation.registerAction = function(actions, callback) {
  for(var key in actions) {
    buttons[key].interactive = true
    buttons[key].on('touchend', function () {
      var attack = buttonKey(this) || 'clean'
      actions[attack]()

      var randomAttack = enemyMonster.randomAttack()
      this.interactive = false

      callback(attack,randomAttack)

      setTimeout(function () {
        this.interactive = true;
      }.bind(this),1000)
    })
  }
};

module.exports = operation;
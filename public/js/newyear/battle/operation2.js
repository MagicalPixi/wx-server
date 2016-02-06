/**
 * Created by zyg on 16/2/6.
 */
var fireButton = require('../../../sprites/fire_button');
var ahhhhButton = require('../../../sprites/ahhhh_button');
var boomButton = require('../../../sprites/boom_button');
var cleanButton = require('../../../sprites/clean_button');

var operation = new PIXI.Container();

operation.addChild(fireButton);
operation.addChild(ahhhhButton);
operation.addChild(boomButton);
operation.addChild(cleanButton);

var bottomAttackAction = require('../../../actions/bottomAttackActions');

bottomAttackAction(
  operation,
  [boomButton,cleanButton,fireButton,ahhhhButton]
)


module.exports = operation;
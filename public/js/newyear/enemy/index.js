/**
 * Created by zyg on 16/2/8.
 */
var pixiLib = require('pixi-lib');
var loader = require('../../loader');
var params = require('./params')

var fuckHimAction = require('../../../actions/fuckHimAction');

module.exports = function(render) {
  loader.add(params.resource.json, 'json')
    .add('fuck_him')
    .add(params.resource.png, 'png').load(function () {
      var enemyStage = new PIXI.Container()

      var fuckHim = require('../../../sprites/fuck_him');
      fuckHimAction(fuckHim);
      enemyStage.name = 'enemyStage';

      var enemyMonster = require('./enemyMonster');
      var light = require('../../../sprites/light');
      light.play();

      enemyStage.addChild(light)
      enemyStage.addChild(enemyMonster);
      enemyStage.addChild(fuckHim);

      render(enemyStage)
      pixiLib.createAction.dispatch('chooseMonsterEnd');
    });
}

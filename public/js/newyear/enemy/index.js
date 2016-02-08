/**
 * Created by zyg on 16/2/8.
 */
var loader = require('../../loader');
var params = require('./params')

module.exports = function(render) {
  loader.add(params.resource.json, 'json')
    .add(params.resource.png, 'png').load(function () {
      var enemyStage = new PIXI.Container()

      enemyStage.name = 'enemyStage';

      var enemyMonster = require('./enemyMonster');
      var light = require('../../../sprites/light')
      light.play();

      enemyStage.addChild(light)
      enemyStage.addChild(enemyMonster);

      render(enemyStage)

      enemyMonster.appear();
    });
}

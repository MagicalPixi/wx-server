/**
 * Created by zyg on 16/2/8.
 */
var pixiLib = require('pixi-lib');
var loader = require('../../loader');
var params = require('./params')


module.exports = function(render, beat) {
  loader.add(params.resource.json, 'json')
    .add(params.resource.png, 'png').load(function () {
      var endStage = new PIXI.Container()

      endStage.name = 'enemyStendStageage';
      var again = require('../../../sprite/again')
      var monster = require('./monster');
      monster.update(true)
      var light = require('../../../sprites/light');
      light.play();

      endStage.addChild(light)
      endStage.addChild(monster);
      endStage.addChile(again)
      again.on('touchstart', function () {
          again.gotoAndStop(1)
      })
      again.on('touchend', function () {
          again.gotoAndStop(0)
          window.battle()
      })

      render(endStage)
      pixiLib.createAction.dispatch('chooseMonsterEnd');
    });
}

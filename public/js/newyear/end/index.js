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

      endStage.name = 'enemyStendStage';


      render(endStage)

      var again = require('../../../sprites/again')
      var monster = require('./monster');
      monster.update(beat)
      monster.x = 0
      var share_mark = require('../../../sprites/share_mark')
      var light = require('../../../sprites/light');
      light.play();

      endStage.addChild(light)
      endStage.addChild(monster);
      endStage.addChild(again)
      endStage.addChild(share_mark)
      again.interactive = true
      again.on('touchstart', function () {
          again.gotoAndStop(1)
      })
      again.on('touchend', function () {
          again.gotoAndStop(0)
          dispatch('myHpStart')
          dispatch('enemyHpStart')
          window.battle()
      })
      endStage.ready = true;
    });
}

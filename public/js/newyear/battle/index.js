/**
 * Created by zyg on 16/2/4.
 */
var loader = require('../../loader');
module.exports = function (render) {
  loader.add(
    ['boom', 'shock', 'wagTail', 'squirm', 'wink',
      'attack', 'playerhp', 'enemyhp'],
    'json'
  ).add(['hpframe'], 'png').load(function () {
    var operation = require('./operation')
    var monster = require('./monster');
    var hpframeFactory = require('../../../sprites/hpframe')
    var enemyhp = require('../../../sprites/enemyhp')
    var playerhp = require('../../../sprites/playerhp')
    var enemyhpframe = hpframeFactory({x:20, y:0})
    var playerhpframe = hpframeFactory({x:20, y: 760})
      //startStafe int
    var battleStage = new PIXI.Container();
    battleStage.addChild(monster);
    battleStage.addChild(operation)
    battleStage.addChild(enemyhpframe)
    battleStage.addChild(playerhpframe)
    battleStage.addChild(enemyhp)
    battleStage.addChild(playerhp)
      window.shock = function () {
        monster.shock();
      }
      window.boom = function () {
        monster.boom();
      }
      window.wagTail = function () {
        monster.wagTail();
      }
      window.squirm = function () {
        monster.squirm();
      }
      window.wink = function () {
        monster.wink();
      }

      render(battleStage);
    })
};
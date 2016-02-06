/**
 * Created by zyg on 16/2/4.
 */
var loader = require('../../loader');
module.exports = function (render) {
  loader.add(
    ['boom', 'shock', 'wagTail', 'squirm', 'wink',
      'attack', 'playerhp', 'enemyhp',
      'fire_button', 'boom_button', 'clean_button', 'ahhhh_button'],
    'json'
  ).addMulti('myDragon', ['_angry', '_awkaward'], 'json').add(['hpframe'], 'png').load(function () {
      var operation = require('./operation')
      var myMonster = require('../../../sprites/myMonster')
      var operation2 = require('./operation2')
      var monster = require('./monster');
      var hpframeFactory = require('../../../sprites/hpframe')
      var enemyhp = require('../../../sprites/enemyhp')
      var playerhp = require('../../../sprites/playerhp')
      var enemyhpframe = hpframeFactory({x: 20, y: 0})
      var playerhpframe = hpframeFactory({x: 20, y: 760})
      //startStafe int
      var battleStage = new PIXI.Container();
      battleStage.addChild(monster);
      //battleStage.addChild(operation)
      battleStage.addChild(operation2)
      battleStage.addChild(enemyhpframe)
      battleStage.addChild(playerhpframe)
      battleStage.addChild(enemyhp)
      battleStage.addChild(playerhp)
      battleStage.addChild(myMonster)


      window.shock = function () {
        monster.ahhhh();
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
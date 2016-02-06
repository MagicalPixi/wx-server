/**
 * Created by zyg on 16/2/4.
 */
var loader = require('../../loader');
var myMonsterParams = require('../../../sprites/myMonster/params')

var earthShockAction = require('../../../actions/earthShockAction');

module.exports = function (render) {
  loader.add(
    ['playerhp', 'enemyhp',
      'fire_button', 'boom_button', 'clean_button', 'ahhhh_button'],
    'json'
  ).addMulti('enemy_dragon',['_boom','_ahhhh','_clean','_squirm','_wagTail','_wink'])
  .addMulti(myMonsterParams.myMonster, myMonsterParams.action, 'json')
    .add(['hpframe'], 'png').load(function () {

      var myMonster = require('../../../sprites/myMonster')
      var operation2 = require('./operation2')
      var enemy_dragon = require('./enemy_dragon');
      var hpframeFactory = require('../../../sprites/hpframe')
      var enemyhp = require('../../../sprites/enemyhp')
      var playerhp = require('../../../sprites/playerhp')
      var enemyhpframe = hpframeFactory({x: 20, y: 0})
      var playerhpframe = hpframeFactory({x: 20, y: 760})
      //startStafe int
      var battleStage = new PIXI.Container();
      battleStage.addChild(enemy_dragon);
      battleStage.addChild(operation2)
      battleStage.addChild(enemyhpframe)
      battleStage.addChild(playerhpframe)
      battleStage.addChild(enemyhp)
      battleStage.addChild(playerhp)
      battleStage.addChild(myMonster)


      window.shock = function () {
        myMonster.scream();
        enemy_dragon.ahhhh();
        es && es()

      }
      window.boom = function () {
        myMonster.boom();
        enemy_dragon.boom();
      }
      window.wagTail = function () {
        myMonster.tail();
        enemy_dragon.wagTail();
      }
      window.squirm = function () {
        enemy_dragon.squirm();
      }
      window.wink = function () {
        enemy_dragon.wink();
      };


      earthShockAction(battleStage);

      render(battleStage);
    })
};
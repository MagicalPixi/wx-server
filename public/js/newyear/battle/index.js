/**
 * Created by zyg on 16/2/4.
 */
var loader = require('../../loader');
var myMonsterParams = require('../../../sprites/myMonster/params')
module.exports = function (render) {
  loader.add(
    ['playerhp', 'enemyhp',
      'fire_button', 'boom_button', 'clean_button', 'ahhhh_button'],
    'json'
  ).addMulti('enemy_dragon',['_boom','_ahhhh','_clean','_squirm','_wagTail','_wink'])
  .addMulti('myDragon', myMonsterParams.action, 'json')
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
        es()

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
      }

      var ii=5;

      window.es = function () {
        battleStage.render = function () {
          if((--ii)<0){
            ii = 5
            if(battleStage.y%2===0){
              battleStage.y -= 11;
              battleStage.x -= 11;
              battleStage.scale.x = 1.05;
              battleStage.scale.y = 1.05;
            }else{
              battleStage.y += 11;
              battleStage.x += 11;
              battleStage.scale.x = 1;
              battleStage.scale.y = 1;
            }
          }
        }

        setTimeout(function () {
          battleStage.render = '';
        },2000)
      }


      render(battleStage);
    })
};
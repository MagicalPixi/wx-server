/**
 * Created by zyg on 16/2/4.
 */
var loader = require('../../loader');
var myMonsterParams = require('../../../sprites/myMonster/params')

var earthShockAction = require('../../../actions/earthShockAction');
var enemyAttackAction = require('../../../actions/enemyAttackAction');
var myHpAction = require('../../../actions/myHpAction');
var enemyHpAction = require('../../../actions/enemyHpAction');


var enemyPathArr = [
  './enemy_bear',
  './enemy_dragon',
  './enemy_monkey',
  './enemy_snake',
];

var enemyMap = {
  1: {
    pre: 'enemy_bear',
    format: ['_boom', '_blink', '_ahhhh', '_clean', '_dead', '_round', '_shake', '_tail'],
    path: enemyPathArr[0]
  },
  0: {
    pre: 'enemy_dragon',
    format: ['_boom', '_ahhhh', '_clean', '_squirm', '_wagTail', '_wink'],
    path: enemyPathArr[1]
  },
  2: {
    pre: 'enemy_monkey',
    format: ['_boom', '_blink', '_ahhhh', '_clean', '_dead', '_round', '_shake', '_tail'],
    path: enemyPathArr[2]
  },
  3: {
    pre: 'enemy_snake',
    format: ['_boom', '_blink', '_ahhhh', '_clean', '_dead', '_round', '_shake', '_tail'],
    path: enemyPathArr[3]
  }
};

module.exports = function (render) {

  var enemy = enemyMap[enemymonster.type];

  ////loading脚本,但不执行
  //require.ensure([
  //  './enemy_bear',
  //  './enemy_dragon',
  //  './enemy_monkey',
  //  './enemy_snake',
  //], function (require) {

    var battleStage = new PIXI.Container();
    render(battleStage);

    //loading资源
    loader.add(
      ['playerhp', 'enemyhp',
        'fire_button', 'boom_button', 'clean_button', 'ahhhh_button'], 'json')
      .addMulti(enemy.pre, enemy.format)
      .addMulti(myMonsterParams.myMonster, myMonsterParams.action, 'json')
      .add(['hpframe'], 'png').load(function () {

        var myMonster = require('../../../sprites/myMonster')

        var myAttackAction = require('../../../actions/myAttackAction')

        var enemy_monster;

        var enemyMonsterType = parseInt(window.enemymonster.type);
        if( enemyMonsterType === 0){
          enemy_monster = require('./enemy_dragon');
        }
        if(enemyMonsterType === 1){
          enemy_monster = require('./enemy_bear');
        }
        if(enemyMonsterType === 2){
          enemy_monster = require('./enemy_monkey');
        }
        if(enemyMonsterType === 3){
          enemy_monster = require('./enemy_snake');
        }

        var operation2 = require('./operation2')

        var hpframeFactory = require('../../../sprites/hpframe')
        var enemyhp = require('../../../sprites/enemyhp')
        var playerhp = require('../../../sprites/playerhp');

        var enemyhpframe = hpframeFactory({x: 20, y: 0})
        var playerhpframe = hpframeFactory({x: 20, y: 760})

        myAttackAction(myMonster)
        enemyHpAction(enemyhp);

        battleStage.ready = true;
        battleStage.name = 'battleStage';

        //startStafe int
        battleStage.addChild(enemy_monster);

        battleStage.addChild(operation2)
        battleStage.addChild(enemyhpframe)
        battleStage.addChild(playerhpframe)
        battleStage.addChild(enemyhp)
        battleStage.addChild(playerhp)
        battleStage.addChild(myMonster)

        enemyAttackAction(enemy_monster, enemy.format);

        myHpAction(playerhp);

        //window.shock = function () {
        //  myMonster.scream();
        //  enemy_monster.ahhhh();
        //  es && es()
        //
        //}
        //window.boom = function () {
        //  myMonster.boom();
        //  enemy_monster.boom();
        //}
        //window.wagTail = function () {
        //  myMonster.tail();
        //  enemy_monster.tail();
        //}
        //window.squirm = function () {
        //  enemy_monster.squirm();
        //}
        //window.wink = function () {
        //  enemy_monster.blink();
        //};

        earthShockAction(battleStage);

      });
  //});
};
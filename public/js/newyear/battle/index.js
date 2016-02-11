/**
 * Created by zyg on 16/2/4.
 */
var loader = require('../../loader');
var myMonsterParams = require('./myMonster/params')
var enemyMonsterParams = require('./enemyMonster/params')

var isReady = false;
var battleStage = null;

module.exports = function (render) {

  if(isReady) {
    render(battleStage);

    dispatch('myHpStart');
    dispatch('enemyHpStart');

  }else{
    battleStage = new PIXI.Container();
    render(battleStage);
    //loading资源
    loader.add(
      ['playerhp', 'enemyhp', 'fire',
        'fire_button', 'boom_button', 'clean_button', 'ahhhh_button'], 'json')
      .addMulti(enemyMonsterParams.enemyMonster, enemyMonsterParams.action, 'json')
      .addMulti(myMonsterParams.myMonster, myMonsterParams.action, 'json')
      .add(['hpframe'], 'png').load(function () {
        var sprites = require('./sprites')

      var addOperationAction = function() {
        var actions = {
          fire: function () {
            this.interactive = false
            sprites.myMonster.fire()
          },
          scream:function () {
            sprites.myMonster.scream()
          },
          boom: function () {
            sprites.myMonster.boom()
          },
          clean: function () {
            sprites.myMonster.clean()
          }
        }
        sprites.operation.registerAction(actions, function(randomAttack) {
          //TODO add logical for randomAttack compare with myAttack
          console.log('add logical for randomAttack compare with myAttack' + '>>>>>>randomAttackIndex: '+ randomAttack)
        })
      }

      var addMonsterAction = function (params, monster) {
        params.attack.forEach(function (name,i) {
          var obj = monster.sprites[i]
          obj.loop = (name != 'boom')
          monster[name] = function (lose) {
            if (name != 'fire') this.removeChildren();
            this.addChild(obj);
            if (name != 'dead') obj.play()
            name === 'dead' ? obj.gotoAndStop(1) : setTimeout(function () {
              name == 'fire' ? obj.parent.removeChild(obj) : obj.gotoAndStop(0);
            }, name == 'fire' ? 1500 : 2000);
          }
        });
      }

      battleStage.ready = true;
      battleStage.name = 'battleStage';
      addOperationAction()
      addMonsterAction(myMonsterParams, sprites.myMonster)
      addMonsterAction(enemyMonsterParams, sprites.enemy_monster)
        //startStafe init
      battleStage.addChild(sprites.operation)
        //hp bars
      battleStage.addChild(sprites.enemyhpframe)
      battleStage.addChild(sprites.playerhpframe)
      battleStage.addChild(sprites.enemyhp)
      battleStage.addChild(sprites.playerhp)
        //monsters
      battleStage.addChild(sprites.enemy_monster);
      battleStage.addChild(sprites.myMonster)
      isReady = true;
    });
  }
};
/**
 * Created by zyg on 16/2/4.
 */
var loader = require('../../loader');
var myMonsterParams = require('./myMonster/params')
var enemyMonsterParams = require('./enemyMonster/params')
var explanation = require('./explanation')
var attackCompare = require('./attackCompare');

var isReady = false;
var battleStage = null;

var enemyHp;
var playerHp;

var getTotalHp = function(player) {
  var properties = ['property1', 'property2', 'property3', 'property4', 'property5']
  var count = 0
  for (var a = 0; a < properties.length; a++) {
    if (player[properties[a]] == 1) {
      count ++
    }
  }
  return count
}

var BGM = function(start) {
  var bgm = document.querySelector('#bgm')
  bgm.src = 'http://7u2min.com1.z0.glb.clouddn.com/pm_battle_bg.mp3';
  start? bgm.play() : bgm.pause()
}

module.exports = function (render) {

  if(isReady) {
    render(battleStage);
    BGM(true)
    var sprites = require('./sprites')
    sprites.enemyhp.gotoAndStop(getTotalHp(window.enemymonster) + 1)
    sprites.playerhp.gotoAndStop(getTotalHp(window.mymonster) + 1)
  }else{
    battleStage = new PIXI.Container();
    render(battleStage);
    //loading资源
    loader.add(
      ['myhp', 'enemyhp', 'fire',
        'fire_button', 'boom_button', 'clean_button', 'ahhhh_button'], 'json')
      .addMulti(enemyMonsterParams.enemyMonster, enemyMonsterParams.action, 'json')
      .addMulti(myMonsterParams.myMonster, myMonsterParams.action, 'json')
      .add(['fail', 'success'], 'png').load(function () {
      BGM(true)
        var sprites = require('./sprites')
        enemyHp = sprites.enemyhp;
        playerHp = sprites.playerhp;
      var addOperationAction = function() {
        var actions = {
          fire: function () {
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
        sprites.operation.registerAction(actions, function(attackName,randomAttack) {
          //TODO add logical for randomAttack compare with myAttack
          console.log(randomAttack)
          var compareResult = attackCompare.byName(attackName,randomAttack);
          explanation.update(randomAttack, explanation.nameTransToIndexMap(attackName))
          var r = true;
          if(compareResult > 0){
            r = sprites.enemyhp.injured();

            if(!r){
              setTimeout(function () {
                battleStage.addChild(sprites.success)
                setTimeout(function () {
                  battleStage.removeChild(sprites.success)
                  window.end(true);
                }, 2000)
              }, 2000)

            }

          }else if(compareResult < 0){
            r = sprites.playerhp.injured();

            if(!r){
              setTimeout(function () {
                battleStage.addChild(sprites.fail)
                setTimeout(function () {
                  battleStage.removeChild(sprites.fail)
                  window.end(false);
                }, 2000)
              }, 2000)
            }
          }
          if(!r){
            console.log('game over');
          }
        })
      };

      var addMonsterAction = function (params, monster) {
        params.attack.forEach(function (name,i) {
          var obj = monster.sprites[i]
          obj.loop = (name != 'boom')
          monster[name] = function (lose) {
            if (name != 'fire') this.removeChildren();
            this.addChild(obj);
            if (name != 'dead') obj.play()
            name === 'dead' ? obj.gotoAndStop(1) :
              setTimeout(function () {
                name == 'fire' && obj.parent ? obj.parent.removeChild(obj) : obj.gotoAndStop(0);
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
      sprites.enemyhp.gotoAndStop(getTotalHp(window.enemymonster) + 1)
      sprites.playerhp.gotoAndStop(getTotalHp(window.mymonster) + 1)

        battleStage.addChild(sprites.enemyhp)
      battleStage.addChild(sprites.playerhp)
        //monsters
      battleStage.addChild(sprites.enemy_monster);
      battleStage.addChild(sprites.myMonster)
      battleStage.addChild(explanation)
      isReady = true;
    });
  }
};

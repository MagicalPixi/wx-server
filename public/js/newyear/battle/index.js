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

module.exports = function (render) {

  if(isReady) {
    render(battleStage);
    enemyHp.init();
    playerHp.init();
  }else{
    battleStage = new PIXI.Container();
    render(battleStage);
    //loading资源
    loader.add(
      ['myhp', 'enemyhp', 'fire',
        'fire_button', 'boom_button', 'clean_button', 'ahhhh_button'], 'json')
      .addMulti(enemyMonsterParams.enemyMonster, enemyMonsterParams.action, 'json')
      .addMulti(myMonsterParams.myMonster, myMonsterParams.action, 'json')
      .add(['hpframe'], 'png').load(function () {
        var sprites = require('./sprites')
        enemyHp = sprites.enemyhp;
        playerHp = sprites.playerhp;
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
        sprites.operation.registerAction(actions, function(attackName,randomAttack) {
          //TODO add logical for randomAttack compare with myAttack
          var compareResult = attackCompare.byName(attackName,randomAttack);
          explanation.update(randomAttack, explanation.nameTransToIndexMap(attackName))
          var r = true;
          if(compareResult > 0){
            r = sprites.enemyhp.injured();

            if(!r){
              window.end(true);
            }

          }else if(compareResult < 0){
            r = sprites.playerhp.injured();


            if(!r){
              window.end(false);
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
      battleStage.addChild(sprites.enemyhp)
      sprites.playerhp.gotoAndStop(getTotalHp(window.mymonster) + 1)
      battleStage.addChild(sprites.playerhp)
        //monsters
      battleStage.addChild(sprites.enemy_monster);
      battleStage.addChild(sprites.myMonster)
      battleStage.addChild(explanation)
      isReady = true;
    });
  }
};
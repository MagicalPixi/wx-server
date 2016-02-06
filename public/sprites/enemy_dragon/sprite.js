/**
 * Created by zyg on 16/2/6.
 */
var lib = require('pixi-lib');

var spriteName = 'enemy_dragon';

var enemyDragon = new PIXI.Container();

var formatArray = ['boom','ahhhh','clean','squirm','wagTail','wink'];

//第0个特殊处理,不用loop
var specialIndex = 0;

var spriteObjArray = formatArray.map(function (format) {
  return spriteName+'_'+format
}).map(function (fullTextureName) {

  return lib.getMc({
    textures:lib.getTextures(fullTextureName),
    "spriteName" : fullTextureName,
    "y" : 0 ,
    "scale.y" :  1 ,
    "animationSpeed" :  0.1 ,
    "x" :  0 ,
    "scale.x" :  1
  })
});

//第0个特殊处理
spriteObjArray[specialIndex].loop = false;

enemyDragon[formatArray[specialIndex]] = function () {
  enemyDragon.removeChildren();
  enemyDragon.addChild(spriteObjArray[specialIndex]);
  spriteObjArray[specialIndex].gotoAndPlay(0);
};

formatArray.forEach(function (name,i) {
  if(i !== specialIndex){
    var obj = spriteObjArray[i];

    enemyDragon[name] = function () {
      this.removeChildren();
      this.addChild(obj);

      obj.play();

      setTimeout(function () {
        obj.stop();
      },2000)
    }
  }
});

enemyDragon.addChild(spriteObjArray[0]);

module.exports = enemyDragon;
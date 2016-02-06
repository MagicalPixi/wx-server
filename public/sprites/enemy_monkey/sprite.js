/**
 * Created by zyg on 16/2/6.
 */
var lib = require('pixi-lib');

var spriteName = 'enemy_monkey';

var enemyDragon = new PIXI.Container();

var formatArray = ['boom','blink','ahhhh','clean','dead','round','shake','tail'];

//第0个特殊处理,不用loop
var specialIndex = 0;

var spriteObjArray = formatArray.map(function (format) {
  return spriteName+'_'+format
}).map(function (fullTextureName) {

  return lib.getMc({
    textures:lib.getTextures(fullTextureName),
    "spriteName" : fullTextureName,
    "y" : -30 ,
    "scale.y" :  1 ,
    "animationSpeed" :  0.1 ,
    "x" :  50 ,
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
        obj.gotoAndStop(0);
      },2000)
    }
  }
});

enemyDragon.addChild(spriteObjArray[0]);

enemyDragon.formats = formatArray.map(function (name) {
  return '_' + name
});

module.exports = enemyDragon;
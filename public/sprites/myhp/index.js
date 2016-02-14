var mySprite = require('./sprite.js');
mySprite.render = function () {
}

mySprite.setHp = function(hp) {
  this.hp = hp
  mySprite.gotoAndStop(hp)

  return !!hp;
}

mySprite.injured = function(count) {
  if(!count){
    count = 1;
  }
  return this.setHp(this.currentFrame - count)
}

module.exports = mySprite;
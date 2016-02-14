var mySprite = require('./sprite.js');
mySprite.render = function () {

}
mySprite.setHp = function(hp) {
  this.hp = hp
  mySprite.gotoAndStop(hp)
}


mySprite.injured = function(count) {
  if(!count){
    count = 1;
  }
  this.setHp(this.hp - count)
}

mySprite.setHp(9)


module.exports = mySprite;
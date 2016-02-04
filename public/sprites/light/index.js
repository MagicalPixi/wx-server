var mySprite = require('./sprite.js');
mySprite.render = function () {

}

mySprite.on = function () {
  mySprite.gotoAndStop(0)
}

mySprite.off = function () {
  mySprite.gotoAndStop(1)
}

module.exports = mySprite;
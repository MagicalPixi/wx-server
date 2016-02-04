var mySprite = require('./sprite.js');
mySprite.render = function () {

}

mySprite.interactive = true

mySprite.on('touchstart', function() {
  this.gotoAndStop(0)
})

mySprite.on('touchend', function() {
  this.gotoAndStop(1)
})

mySprite.gotoAndStop(1)

module.exports = mySprite;
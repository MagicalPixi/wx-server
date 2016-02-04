var monster = require('./sprite.js');
monster.inStage = false
monster.speed = 0
monster.x = 940
monster.walkIn = function() {
  this.play()
  this.speed = 5
}

monster.walkOut = function(callback) {
  this.speed = 5
  this.play()
  monster.disapear = callback
}

monster.render = function() {
  this.x -= this.speed
  checkInOrOut()
}

var checkInOrOut = function() {
  if ((!monster.inStage) && monster.x < 320 + monster.speed && monster.x > 320 - monster.speed ) {
    monster.x = 320
    monster.speed = 0
    monster.inStage = true
    monster.stop()
  } else if (monster.inStage && monster.x < -300) {
    monster.x = 940
    monster.speed = 0
    monster.inStage = false
    monster.stop()
    if(monster.disapear) monster.disapear()
  }
}

module.exports = monster;
/**
 * Created by zyg on 16/2/4.
 */
var pixiLib = require('pixi-lib')

module.exports = pixiLib.createAction('monster_description',function start(monster) {
  var state = this;
  window.inStage = false;
  monster.speed = 0;
  monster.walkIn = function() {
    this.play()
    this.speed = 5
  };

  monster.walkOut = function(callback) {
    this.speed = 5
    this.play()
    monster.disapear = callback
  };

  monster.render = function() {
    this.x -= this.speed;
    checkInOrOut()
  };

  var checkInOrOut = function() {
    if ((!window.inStage) && monster.x < 320 + monster.speed && monster.x > 320 - monster.speed ) {
      monster.x = 320
      monster.speed = 0
      window.inStage = true
      monster.stop()
    } else if (window.inStage && monster.x < -120) {
      monster.x = 940
      monster.speed = 0
      window.inStage = false
      monster.stop()
      if(monster.disapear) monster.disapear()
    }
  }
});
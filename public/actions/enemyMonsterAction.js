/**
 * Created by guoshencheng on 2/7/16.
 */

var pixiLib = require('pixi-lib')

module.exports = pixiLib.createAction('enemyMonster', function start(enemyMonster) {
  var state = this

  state.on('chooseMonsterEnd', function() {
    enemyMonster.appear()
  })

  enemyMonster.speed = 0;
  enemyMonster.inStage = false
  enemyMonster.x = 640
  enemyMonster.walkIn = function() {
    this.speed = 5
  };

  var checkIn= function() {
    if ((!enemyMonster.inStage) && enemyMonster.x < 0 ) {
      enemyMonster.x = 0
      enemyMonster.speed = 0
      enemyMonster.inStage = true
    }
  }

  enemyMonster.appear = function() {
    this.speed = 5
  }

  enemyMonster.render = function () {
    this.x -= this.speed
    checkIn()
    this.children.forEach(function (child) {
      if (child.render) child.render()
    });
  }

})
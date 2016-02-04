/**
 * Created by zyg on 16/2/4.
 */
var pixiLib = require('pixi-lib');

module.exports = pixiLib.createAction('chooseBar',function start(chooseBar) {
  var state = this;


  chooseBar.y = 150
  chooseBar.speed = 0
  chooseBar.acceleration = 0

  state.on('descriptionEnd', function (stage) {

    chooseBar.appear()
  });

  chooseBar.appear = function () {
    this.speed = 5
    this.acceleration = 0.02
  }
  chooseBar.render = function() {
    this.children.forEach(function (child) {
      if (child.render) child.render()
    });
    this.y -= this.speed
    this.speed -= this.acceleration
    checkApeared()
  }

  var checkApeared = function () {
    if (chooseBar.y < 0) {
      chooseBar.y = 0
      chooseBar.speed = 0
      chooseBar.acceleration = 0
      if (chooseBar.apeared) chooseBar.apeared()
    }
  }
});
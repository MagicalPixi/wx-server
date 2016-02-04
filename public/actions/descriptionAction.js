/**
 * Created by zyg on 16/2/4.
 */
var pixiLib = require('pixi-lib')

module.exports = pixiLib.createAction('description',function start(description) {
  var state = this;

  description.speed = 0
  description.isApear = true
  description.acceleration = 0

  description.render = function () {
    this.children.forEach(function (child) {
      if (child.render) child.render()
    });
    this.y += this.speed
    this.speed += this.acceleration

    checkdrop(this.parent)
  }

  var checkdrop = function(stage) {
    if (description.y > 1004) {
      description.speed = 0
      description.acceleration = 0


      if (description.isApear) {
        description.isApear = false;
        //description.destroy();
        state.end(stage);
      }
    }
  };


  state.on('startEnd', function () {
    description.acceleration = 0.6
  })

});

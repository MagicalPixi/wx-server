/**
 * Created by zyg on 16/2/4.
 */
var pixiLib = require('pixi-lib')

module.exports = pixiLib.createAction('chooseMonster',function start(chooseMonster) {
  var state = this;

  state.on('descriptionEnd', function (stage) {


    stage.addChild(chooseMonster)
  });

  chooseMonster.appear = function(parent) {

  };

  chooseMonster.render = function () {
    this.children.forEach(function (child) {
      if (child.render) child.render()
    });
  }
});
/**
 * Created by zyg on 16/2/4.
 */
var pixiLib = require('pixi-lib')

module.exports = pixiLib.createAction('start',function start(startBtn, chooseMonster) {
  var state = this;

  //start action
  startBtn.on('touchstart', function() {
    this.gotoAndStop(0)
  })

  startBtn.on('touchend', function() {
    this.gotoAndStop(1)
    //this.parent.drop(0.6)
    state.end();
  })
});
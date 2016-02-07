/**
 * Created by guoshencheng on 2/7/16.
 */

var pixiLib = require('pixi-lib')

module.exports = pixiLib.createAction('myMonster', function start(myMonster) {
  var state = this
  state.on('chooseMonsterEnd', function() {
    myMonster.appear()
  })
})
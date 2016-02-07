/**
 * Created by guoshencheng on 2/7/16.
 */

var pixiLib = require('pixi-lib')

module.exports = pixiLib.createAction('enemyMonster', function start(enemyMonster) {
  var state = this
  state.on('chooseMonsterEnd', function() {
    enemyMonster.appear()
  })
})
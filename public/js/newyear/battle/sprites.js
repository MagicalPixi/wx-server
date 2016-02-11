/**
 * Created by guoshencheng on 2/11/16.
 */
var hpframeFactory = require('../../../sprites/hpframe')
var enemyhp = require('../../../sprites/enemyhp')
var playerhp = require('../../../sprites/playerhp');
var myMonster = require('../../../sprites/myMonster')
var operation = require('./operation2')
var enemyhpframe = hpframeFactory({x: 20, y: 0})
var playerhpframe = hpframeFactory({x: 20, y: 760})
var enemyMonster = require('./enemyMonster')

module.exports = {
  hpframeFactory: hpframeFactory,
  enemyhp: enemyhp,
  playerhp: playerhp,
  myMonster: myMonster,
  enemy_monster:enemyMonster,
  enemyhpframe: enemyhpframe,
  playerhpframe: playerhpframe,
  operation: operation
}

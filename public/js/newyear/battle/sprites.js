/**
 * Created by guoshencheng on 2/11/16.
 */
var enemyhp = require('../../../sprites/enemyhp')
var playerhp = require('../../../sprites/myhp');
var myMonster = require('./myMonster')
var operation = require('./operation2')
var enemyMonster = require('./enemyMonster')

module.exports = {
  enemyhp: enemyhp,
  playerhp: playerhp,
  myMonster: myMonster,
  enemy_monster:enemyMonster,
  operation: operation
}

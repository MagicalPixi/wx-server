/**
 * Created by guoshencheng on 2/6/16.
 */
var cate = {
  snake:'mySnake',
  dragon:'myDragon',
  monkey:'myMonkey',
  bear:'myBear'
}

var action = ['_angry', '_awkward', '_blink', '_firecrack', '_clean'
, '_dead', '_round', '_scream', '_shake', '_tail']

var attack = ['angry', 'awkward', 'blink', 'boom', 'clean'
  , 'dead', 'round', 'scream', 'shake', 'tail']

module.exports = {
  cate: cate,
  myMonster: cate.monkey,
  action: action,
  attack: attack
}
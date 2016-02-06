/**
 * Created by guoshencheng on 2/6/16.
 */
var cate = {
  snake:'mySnake',
  dragon:'myDragon',
  monkey:'myMonkey',
  bear:'myBear'
}

var action = ['_angry', '_awkaward', '_blink', '_firecrack', '_clean'
, '_dead', '_round', '_scream', '_shake', '_tail']

var attack = ['angry', 'awkaward', 'blink', 'boom', 'clean'
  , 'dead', 'round', 'scream', 'shake', 'tail']

module.exports = {
  cate: cate,
  myMonster: cate.dragon,
  action: action,
  attack: attack
}
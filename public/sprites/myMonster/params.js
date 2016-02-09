/**
 * Created by guoshencheng on 2/6/16.
 */
var cate = {
  snake:'mySnake',
  dragon:'myDragon',
  monkey:'myMonkey',
  bear:'myBear'
}

var monsters = ['myDragon', 'myBear', 'myMonkey', 'mySnake']

var action = ['_firecrack', '_tail', '_blink', '_scream','_angry', '_awkward', '_clean'
  , '_dead', '_round', '_shake']

var attack = ['boom', 'tail', 'blink', 'scream', 'angry', 'awkward', 'clean'
  , 'dead', 'round', 'shake']

module.exports = {
  cate: cate,
  myMonster: cate.snake,
  monsters: monsters,
  action: action,
  attack: attack
}
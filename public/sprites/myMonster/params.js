/**
 * Created by guoshencheng on 2/6/16.
 */
var cate = {
  snake:'mySnake',
  dragon:'myDragon',
  monkey:'myMonkey',
  bear:'myBear'
};

var monsters = ['myDragon', 'myBear', 'myMonkey', 'mySnake']

var action = ['_firecrack', '_clean', '_blink', '_scream','_angry', '_awkward', '_tail'
  , '_round', '_shake', '_dead']

var attack = ['boom', 'clean', 'fire', 'scream', 'angry', 'awkward', 'tail'
  , 'round', 'shake', 'dead','blink'];

module.exports = {
  cate: cate,
  myMonster: cate.snake,
  monsters: monsters,
  action: action,
  attack: attack
}
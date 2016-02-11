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

var action = ['_firecrack', '_clean', '_scream', '_dead']

var attack = ['boom', 'scream', 'fire', 'clean', 'dead'];

module.exports = {
  cate: cate,
  myMonster: cate.snake,
  monsters: monsters,
  action: action,
  attack: attack
}
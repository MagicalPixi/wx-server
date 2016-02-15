/**
 * Created by guoshencheng on 2/11/16.
 */
var cate = {
  snake:'enemy_snake',
  dragon:'enemy_dragon',
  monkey:'enemy_monkey',
  bear:'enemy_bear'
};

var monsters = ['enemy_dragon', 'enemy_bear', 'enemy_monkey', 'enemy_snake'];

var action = ['_boom', '_ahhhh', '_clean']

var attack = ['boom', 'scream', 'fire', 'clean'];

module.exports = {
  cate: cate,
  enemyMonster: monsters[window.enemymonster.type],
  monsters: monsters,
  action: action,
  attack: attack
}
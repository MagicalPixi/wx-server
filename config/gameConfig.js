/**
 * Created by guoshencheng on 2/6/16.
 */
var myMonsterCate = {
  snake:'mySnake',
  dragon:'myDragon',
  monkey:'myMonkey',
  bear:'myBear'
}

var enemyCate = {
  snake:'enemySnake',
  dragon:'enemyDragon',
  monkey:'enemyMonkey',
  bear:'enemyBear'
}

module.exports = {
  myMonsterCate: myMonsterCate,
  enemyCate: enemyCate,
  myMonster: myMonsterCate.dragon,
  enemy: enemyCate.dragon
}
/**
 * Created by guoshencheng on 2/9/16.
 */

var explanation = new PIXI.Container()

var mytext = new PIXI.Text('', {
  font: '100px Arial',
  fill: 0x666666,
  align: 'left'
})

var enemytext = new PIXI.Text('', {
  font: '100px Arial',
  fill: 0x666666,
  align: 'left'
})

mytext.y = 550
mytext.x = 340

enemytext.y = 150
enemytext.x = 20

explanation.addChild(mytext)
explanation.addChild(enemytext)


var names = ['赛雷!', '大扫除', '放火!',
  '尖叫!']

explanation.update = function (enemy, my, success) {
  mytext.text = names[my]
  enemytext.text = names[enemy]
}

explanation.nameTransToIndexMap = function (name) {
  var m = {
    boom:0,
    clean:1,
    fire:2,
    scream:3,
  }

  var index = m[name];

  if(index === undefined){
    throw new Error(name + ' attackName invalid');
  }

  return index;
};

module.exports = explanation
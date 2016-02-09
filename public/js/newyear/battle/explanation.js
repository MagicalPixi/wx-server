/**
 * Created by guoshencheng on 2/9/16.
 */

var explanation = new PIXI.Container()

var text = new PIXI.Text('', {
  font: '30px Arial',
  fill: 0x666666,
  align: 'left'
})

text.y = 400
text.x = 20

explanation.addChild(text)

var error = ['有点饿了', '卖了个萌', '身体不舒服', '春心荡漾']

var names = ['赛雷!', '大扫除!', '放火!',
  '尖叫!', '生气...', '流汗...', '摇尾巴', '变圆', '眨眼', '摇一摇', '挂掉了']

explanation.update = function (enemy, success, index) {
  text.text = enemy ? '敌方' :'你的' + '年兽' + (success ? ('成功使用技能 \'' + names[index] + ' \'') : (error[parseInt(Math.random() * error.length)] +
  ',\n 错误的使用了技能 \'' + names[index] + ' \''))
}

module.exports = explanation
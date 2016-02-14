var loader = require('../../loader');
var params = require('./params')
var chooseMonsterAction = require('../../../actions/chooseMonsterAction');

module.exports = function(render) {
  loader.add(params.resource.json,'json')
    .add('fuck_him')
    .add(params.resource.png, 'png').load(function () {
    var light = require('../../../sprites/light')
    var chooseMonster = require('./chooseMonster')
    var description = require('./description');
    var enemyMonster = require('./enemyMonster');

    chooseMonsterAction(chooseMonster);

    ////startStafe int
    var startStage = new PIXI.Container()
    startStage.addChild(light)
    startStage.addChild(description)
    startStage.addChild(enemyMonster)
    light.play();

    startStage.name = 'startStage';

    render(startStage);
  })
};
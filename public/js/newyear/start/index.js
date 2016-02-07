var loader = require('../../loader');
var params = require('./params')
var descriptionAction = require('../../../actions/descriptionAction');
var chooseMonsterAction = require('../../../actions/chooseMonsterAction');
module.exports = function(render) {
  loader.add(params.resource.json,'json')
    .add(params.resource.png, 'png').load(function () {
    var light = require('../../../sprites/light')
    //chooseMonster init
    var chooseMonster = require('./chooseMonster')

    ////descript init
    var description = require('./description')

    descriptionAction(description);
    chooseMonsterAction(chooseMonster);

    ////startStafe int
    var startStage = new PIXI.Container()
    startStage.addChild(light)
    startStage.addChild(description)

    light.play()

    render(startStage);
  })
};
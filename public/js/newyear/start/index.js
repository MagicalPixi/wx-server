var loader = require('../../loader');

var descriptionAction = require('../../../actions/descriptionAction');

module.exports = function(render) {
  loader.add(['light', 'start', 'who',
    'change_monster', 'comfirm_monster', 'monster_description'],'json')
    .add(['title'], 'png').load(function () {
    var light = require('../../../sprites/light')

    //chooseMonster init
    var chooseMonster = require('./chooseMonster')

    //descript init
    var description = require('./description')
    //description.dissapear = function () {
    //  chooseMonster.appear(startStage)
    //}

    descriptionAction(description);

    //startStafe int
    var startStage = new PIXI.Container()
    startStage.addChild(light)
    startStage.addChild(description)
    light.play()
    render(startStage);
  })
};
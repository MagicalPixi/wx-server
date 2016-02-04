var loader = require('../../loader');
module.exports = function(render) {
  loader.add(['light', 'start', 'who'],'json').load(function () {
    var light = require('../../../sprites/light')
    var title = require('../../../sprites/title')
    var start = require('../../../sprites/start')
    var who =require('../../../sprites/who')
    var startStage = new PIXI.Container()
    startStage.addChild(light)
    startStage.addChild(title)
    startStage.addChild(start)
    startStage.addChild(who)
    render(startStage);
  })
};
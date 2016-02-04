var loader = require('../../loader');
module.exports = function(render) {
  loader.add(['light', 'start', 'who'],'json').add(['title'], 'png').load(function () {
    var light = require('../../../sprites/light')
    var description = require('./description')
    var startStage = new PIXI.Container()
    startStage.addChild(light)
    startStage.addChild(description)
    light.play()
    render(startStage);
  })
};
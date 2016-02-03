var pixiLib = require('pixi-lib');

var loader = require('../../loader');

module.exports = function(render) {


  loader.add(['boomTP','wink'],'json').load(function () {

    var boomTP2 = require('../../../sprites/boomTP');
    var wink = require('../../../sprites/wink');


    var startStage = new PIXI.Container();

    startStage.addChild(boomTP2);
    startStage.addChild(wink)

    render(startStage);
  })
};
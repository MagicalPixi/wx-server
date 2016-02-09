/**
 * Created by guoshencheng on 2/9/16.
 */
var about = require('../../../sprites/about')
var back = require('../../../sprites/turnback')

var renyan = new PIXI.Container()

renyan.addChild(about)
renyan.addChild(back)

back.on('touchstart', function() {
  renyan.parent.removeChild(renyan)
})

module.exports = renyan
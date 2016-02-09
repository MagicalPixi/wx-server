/**
 * Created by guoshencheng on 2/4/16.
 */
var title = require('../../../sprites/title')
var start = require('../../../sprites/start')
var who = require('../../../sprites/who')

var description = new PIXI.Container()

description.addChild(title)
description.addChild(start)
description.addChild(who)

who.on('touchstart', function() {
  var renyan = require('./renyan')
  description.parent.addChild(renyan)
})

var startAction = require('../../../actions/startAction');

startAction(start);

module.exports = description


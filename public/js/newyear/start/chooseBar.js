/**
 * Created by guoshencheng on 2/4/16.
 */
var monster_description = require('../../../sprites/monster_description')
var change_monster = require('../../../sprites/change_monster')
var comfirm_monster = require('../../../sprites/comfirm_monster')
var chooseBar = new PIXI.Container()

chooseBar.addChild(change_monster)
chooseBar.addChild(comfirm_monster)

module.exports = chooseBar
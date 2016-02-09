/**
 * Created by zyg on 16/2/4.
 */
var pixiLib = require('pixi-lib')
module.exports = pixiLib.createAction('chooseMonster',function start(chooseMonster) {
  var state = this;
  chooseMonster.speed = 0
  chooseMonster.isApear = true
  chooseMonster.acceleration = 0
  var comfirm_monster = require('../sprites/comfirm_monster')
  comfirm_monster.on('touchstart', function() {
    this.gotoAndStop(1)
  })

  comfirm_monster.on('touchend', function() {
    this.gotoAndStop(0)
    window.mymonster = {
      type: chooseMonster.current,
      property1: 0,
      property2: 0,
      property3: 0,
      property4: 0,
      property5: 0,
      beat: 0,
      ownerid: window.user.openid,
      ownerNickName: window.user.nickname
    }
    chooseMonster.acceleration = 0.6
  })
  state.on('descriptionEnd', function (stage) {
    if (!window.mymonster) {
      stage.addChild(chooseMonster)
      chooseMonster.walkIn()
    }
  });

  chooseMonster.appear = function(parent) {

  };

  chooseMonster.render = function () {
    this.y += this.speed
    this.speed += this.acceleration

    checkdrop(this.parent)

    this.children.forEach(function (child) {
      if (child.render) child.render()
    });
  }

  var checkdrop = function(stage) {
    if (chooseMonster.y > 1004) {
      chooseMonster.speed = 0
      chooseMonster.acceleration = 0


      if (chooseMonster.isApear) {
        chooseMonster.isApear = false;
        //description.destroy();
        state.end(stage);
      }
    }
  };
});
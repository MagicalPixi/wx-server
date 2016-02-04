/**
 * Created by zyg on 16/2/4.
 */
var loader = require('../../loader');
module.exports = function (render) {
  loader.add(
    ['boom', 'shock', 'wagTail', 'squirm', 'wink'],
    'json'
  ).load(function () {


      var monster = require('./monster');

      //startStafe int
      var battleStage = new PIXI.Container();



      battleStage.addChild(monster);

      window.shock = function () {
        monster.shock();
      }
      window.boom = function () {
        monster.boom();
      }
      window.wagTail = function () {
        monster.wagTail();
      }
      window.squirm = function () {
        monster.squirm();
      }
      window.wink = function () {
        monster.wink();
      }

      render(battleStage);
    })
};
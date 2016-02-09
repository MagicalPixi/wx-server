var pixiLib = require('pixi-lib');

window.dispatch = pixiLib.createAction.dispatch;

module.exports = pixiLib.createLoader({
  publicPath:'/sprites/'
});

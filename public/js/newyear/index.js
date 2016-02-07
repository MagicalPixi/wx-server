var pixiLib = require('pixi-lib')

var renderer = new PIXI.autoDetectRenderer(640, 1004, {
    transparent:true
  }
);

var render = function(stage) {
  function animate() {
    if (stage.render) stage.render()
    stage.children.forEach(function (child) {
      if (child.render) child.render()
    });
    renderer.render(stage)

    requestAnimationFrame(animate)
  }
  animate()
}

document.body.appendChild(renderer.view)

window.enemyName = 'snake';
window.myMonsterName = 'snake';

//require('./start')(render);
require('./battle')(render);
//require('./battle')(render);

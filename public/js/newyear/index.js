/**
 * Created by guoshencheng on 2/3/16.
 */
var common = require('../common')
//var sprite = require('pixi-lib')
var renderer
common.isSupportWebGL() ? renderer = new PIXI.WebGLRenderer(640, 1004, {
    transparent:true
  }
) : renderer= new PIXI.CanvasRenderer(640, 1004, {
    transparent:true
  }
);

var render = function(stage) {
  function animate() {
    if (stage.render) stage.render()
    stage.children.forEach(function (child) {
      if (child.render) child.render()
    })
    renderer.render(stage)

    requestAnimationFrame(animate)
  }
  animate()
}

document.body.appendChild(renderer.view)
require('./start')(render)
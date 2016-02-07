var pixiLib = require('pixi-lib')

var renderer = new PIXI.autoDetectRenderer(640, 1004, {
    transparent:true
  }
);

var currentStage = null;

var twistFilter = new PIXI.filters.TwistFilter();
twistFilter.radius = 0.8;
var blurFilter = new PIXI.filters.BlurFilter();


window.T = twistFilter;
//
var changeStageFlag = false;
var rafI = 0;

function loadingBetweenStages(currentStage,newStage){

  if(newStage.ready){
    if(currentStage !== newStage){
      currentStage = newStage;
      currentStage.filters = [twistFilter,blurFilter];

      setTimeout(function () {

      },500)
    }

    if(twistFilter.angle >= 0){
      twistFilter.angle -= 0.1;
    }

    if(twistFilter.angle <=0){
      changeStageFlag = false;
      blurFilter.blur = 0;
      currentStage.filters = [blurFilter]
    }
  }else{
    twistFilter.angle += 0.1;
    currentStage.filters = [twistFilter,blurFilter];
  }


  return currentStage;
}

var render = function(stage) {

  cancelAnimationFrame(rafI);

  if(!currentStage){
    currentStage = stage;
  }

  //触发了场景切换
  if(currentStage !== stage){
    changeStageFlag = true;
  }

  function animate() {

    if(changeStageFlag ){
      currentStage = loadingBetweenStages(currentStage,stage);
    }

    if (currentStage.render) currentStage.render();

    currentStage.children.forEach(function (child) {
      if (child.render) child.render()
    });

    renderer.render(currentStage);

    rafI = requestAnimationFrame(animate)
  }
  animate()
};

document.body.appendChild(renderer.view);

window.enemyName = 'snake';

require('./start')(render);
window.change = function(){
  require('./battle')(render);
};
//require('./start')(render);
//require('./battle')(render);


module.exports = render
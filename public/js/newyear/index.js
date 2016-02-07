var pixiLib = require('pixi-lib')

var renderer = new PIXI.autoDetectRenderer(640, 1004, {
    transparent:true
  }
);

var currentStage = null;

var twistFilter = new PIXI.filters.TwistFilter();
twistFilter.radius = 0.7;

window.T = twistFilter;
//
var changeStageFlag = false;
var rafI = 0;

function loadingBetweenStages(currentStage,newStage){

  if(newStage.ready){
    if(currentStage !== newStage){
      currentStage = newStage;
    }

    if(twistFilter.angle >= 0){
      twistFilter.angle -= 0.1;
    }

    if(twistFilter.angle <=0){
      changeStageFlag = false;
      currentStage.filters = []
    }
  }else{
    twistFilter.angle += 0.1;
  }

  currentStage.filters = [twistFilter];

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

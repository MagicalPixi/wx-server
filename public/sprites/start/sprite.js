var lib = require('pixi-lib');

var mySprite = lib.getMc({
    textures:lib.getTextures('start'),
        "spriteName" :  "start" ,
        "x" :  320 ,
        "y" :  800 ,
        "stop" :  1 ,
        "anchor.x" :  0.5 ,
        "animationSpeed" :  0.1 ,
        "scale.x" :  1.2 ,
        "scale.y" :  1.2 ,
});

module.exports = mySprite;
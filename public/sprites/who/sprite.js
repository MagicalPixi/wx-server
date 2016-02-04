var lib = require('pixi-lib');

var mySprite = lib.getMc({
    textures:lib.getTextures('who'),
        "spriteName" :  "who" ,
        "stop" :  1 ,
        "anchor.x" :  0.5 ,
        "animationSpeed" :  0.1 ,
        "x" :  320 ,
        "y" :  700 ,
        "scale.x" :  1.2 ,
        "scale.y" :  1.2 ,
});

module.exports = mySprite;
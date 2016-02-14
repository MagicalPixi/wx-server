var lib = require('pixi-lib');

var mySprite = lib.getMc({
    textures:lib.getTextures('enemyhp'),
        "spriteName" :  "enemyhp" ,
        "y" :  10 ,
        "scale.y" : 1 ,
        "animationSpeed" :  0.1 ,
        "x" :  320 ,
        "scale.x" :  1 ,
        "anchor.x" :  0.5 ,
});

module.exports = mySprite;
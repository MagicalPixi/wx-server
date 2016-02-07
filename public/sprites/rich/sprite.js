var lib = require('pixi-lib');

var mySprite = lib.getMc({

    textures:lib.getTextures('rich'),
        "spriteName" :  "rich" ,
        "y" :  300 ,
        "scale.y" :  0.5 ,
        "animationSpeed" :  0.1 ,
        "rotation" :  0 ,
        "x" :  0 ,
        "scale.x" :  0.5 ,
});

module.exports = mySprite;
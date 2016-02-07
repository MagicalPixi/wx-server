var lib = require('pixi-lib');

var mySprite = lib.getMc({

    textures:lib.getTextures('beautiful'),
        "spriteName" :  "beautiful" ,
        "y" :  600 ,
        "scale.y" :  0.5 ,
        "animationSpeed" :  0.1 ,
        "x" :  0 ,
        "scale.x" :  0.5 ,
});

module.exports = mySprite;
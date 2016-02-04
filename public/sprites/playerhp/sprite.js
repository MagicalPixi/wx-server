var lib = require('pixi-lib');

var mySprite = lib.getMc({
    textures:lib.getTextures('playerhp'),
        "spriteName" :  "playerhp" ,
        "y" :  760 ,
        "scale.y" :  0.5 ,
        "animationSpeed" :  0.1 ,
        "x" :  20 ,
        "scale.x" :  0.6
});

module.exports = mySprite;
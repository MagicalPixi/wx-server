var lib = require('pixi-lib');

var mySprite = lib.getMc({
    textures:lib.getTextures('monster_description'),
        "spriteName" :  "monster_description" ,
        "y" :  240 ,
        "anchor.x" :  0.5 ,
        "animationSpeed" :  0.1 ,
        "scale.y" :  1 ,
        "rotation" :  0 ,
        "x" :  320 ,
        "scale.x" :  1 ,
});

module.exports = mySprite;
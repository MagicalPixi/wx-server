var lib = require('pixi-lib');

var mySprite = lib.getMc({

    textures:lib.getTextures('boom_button'),
        "spriteName" :  "boom_button" ,
        "y" :  904 ,
        "anchor.y" :  1 ,
        "scale.y" :  0.5 ,
        "x" :  40 ,
        "scale.x" :  0.52 ,
});

module.exports = mySprite;
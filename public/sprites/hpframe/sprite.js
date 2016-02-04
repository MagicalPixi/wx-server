var lib = require('pixi-lib');

var spriteFractory = function(property) {
    var mySprite = lib.getIm({
        textures:lib.getTextures('hpframe'),
        "spriteName": "hpframe" ,
        "scale.y": 0.5,
        "y": property.y,
        "x": property.x,
        "scale.x": 0.6,
    })
    return mySprite
}

module.exports = spriteFractory;
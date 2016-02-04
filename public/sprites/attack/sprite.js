var lib = require('pixi-lib');

var spriteFactory = function (property) {
    var sprite = lib.getMc({
        textures:lib.getTextures(property.texture),
        "spriteName":property.texture ,
        "y" :  property.y ,
        "scale.y" :  0.6 ,
        "animationSpeed" :  0.1 ,
        "rotation" :  0 ,
        "x" :  property.x ,
        "scale.x" :  0.6 ,
        "anchor.x" : property.anchorx ,
    })
    sprite.interactive = true
    sprite.on('touchend', property.ontouch)
    return sprite
}

module.exports = spriteFactory;
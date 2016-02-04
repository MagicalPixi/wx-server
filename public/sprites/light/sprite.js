var lib = require('pixi-lib');
var mySprite = lib.getMc({
    textures:lib.getTextures('light'),
        "spriteName": "light",
        "scale.y": 1,
        "animationSpeed": 0.1,
        "scale.x": 1,
});

module.exports = mySprite;
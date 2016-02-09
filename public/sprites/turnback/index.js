var mySprite = require('./sprite.js');
mySprite.render = function () {
}

if (mySprite && !mySprite.interactive) mySprite.interactive = true

module.exports = mySprite;
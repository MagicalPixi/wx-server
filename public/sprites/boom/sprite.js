var lib = require('pixi-lib');

var mySprite = lib.getMc({

    textures:lib.getTextures('boom'),

    

        "loop":false,

        "spriteName" :  "boom" ,

        

    

        

    

        

        "y" :  50 ,

        

    

        

        "animateSpeed" :  0.1 ,

        

    

        

        "anchor.x" :  1 ,

        

    

        

        "animationSpeed" :  0.1 ,

        

    

        

        "x" :  600 ,

        

    
});

module.exports = mySprite;
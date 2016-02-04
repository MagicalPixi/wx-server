var lib = require('pixi-lib');

var mySprite = lib.getMc({

    textures:lib.getTextures('boom'),


        "loop":false,

        

        "spriteName" :  "boom" ,

        

    

        

        "anchor.x" :  1 ,

        

    

        

    

        

        "y" :  50 ,

        

    

        

        "animationSpeed" :  0.1 ,

        

    

        

        "animateSpeed" :  0.1 ,

        

    

        

        "x" :  600 ,

        

    
});

module.exports = mySprite;
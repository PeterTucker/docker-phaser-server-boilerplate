import BaseScene from './BaseScene.js';


export default class PreloaderScene extends BaseScene
{
    constructor()
    {
        super({key: "PreloaderScene"})
    }

    preload(){
        // this.load.image('color', './img/super-mario.gif');

        
    }

    create(){
        
        this.scene.switch("MainScene");
    }

    update(){
    }

    resize(){
        
    }

}
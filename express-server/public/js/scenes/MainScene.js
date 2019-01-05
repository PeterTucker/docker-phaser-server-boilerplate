import BaseScene from './BaseScene.js';

export default class MainScene extends BaseScene {
    constructor() {
        super({
            key: "MainScene",
            physics: {
                matter: {
                    debug: true
                },
                arcade: {
                    // gravity: 100
                    gravity: { y: 1000 },
                    // debug: true
                }
            }
        });
    }

    preload() {

    }

    create() {

     
    }

    createListeners() {
        this.input.keyboard.on('keydown', this.keyDown);
        this.input.keyboard.on('keyup', this.keyUp);
    }

    


    keyDown(evt) {
        let scene = this.scene;
        switch (evt.keyCode) {
            case 32://space
                scene.scorp.spear.center();
                break;
            case 37://left
                scene.scorp.spear.throw({ direction: "left" });
                break;
            case 39://right
                scene.scorp.spear.throw({ direction: "right" });
                break;
        }
    }

    keyUp(evt) {
        let scene = this.scene;

    }

    update() {

    }
}
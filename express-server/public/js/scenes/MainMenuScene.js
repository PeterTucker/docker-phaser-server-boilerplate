import BaseScene from './BaseScene.js';
import { NegPos } from '../utils/Utils.js';
export default class MainMenuScene extends BaseScene {
    constructor() {
        super({ key: "MainMenuScene", physics:{
            matter: {
                // debug: true
            }
        }})
        this.Body = Phaser.Physics.Matter.Matter.Body
    }

    preload() {

    }

    create() {
      

    }

    update() {

    }

    resize() {

    }

}
import { GameScene } from './scenes/game-scene';
import { PreloadScene } from './scenes/preload-scene';
import { Game, Types, WEBGL, Scale } from 'phaser';

const config: Types.Core.GameConfig = {
    type: WEBGL,
    pixelArt: true,
    roundPixels:true,
    scale: {
        parent: "game-container",
        width: 256,
        height: 224,
        autoCenter:Scale.CENTER_BOTH,
        mode: Scale.ScaleModes.HEIGHT_CONTROLS_WIDTH,
    },
    parent: 'game-container',
    backgroundColor: '#d2d2d2',
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0, x: 0 },
            debug: false,
        },  
    },
    scene: [
        PreloadScene,
        GameScene
    ]
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
}

export default StartGame;

import { Scene } from 'phaser';
import { SCENE_KEYS } from "./scene-keys";
import { ASSET_PACK_KEYS } from "../shared/assests";

export class PreloadScene extends Scene {
    //Initailization of Scene
    constructor() {
        super({
            key: SCENE_KEYS.PRELOAD_SCENE,
        });
    };

    public preload(): void {
        this.load.pack(ASSET_PACK_KEYS.MAIN, "assets/data/assets.json");
    }

    public create(): void {
    }
    
}
import * as Phaser from 'phaser';
import Mob from './Mob';

export default class MobList extends Phaser.SpriteBatch {
    constructor(game: Phaser.Game) {
        super(game, game.world, 'MobList');
        for (let i = 0; i < 30; i++) {
            this.addChild(new Mob(game));
        }
    }
}

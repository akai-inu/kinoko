import * as Phaser from 'phaser';
import Mob from './Mob';

export default class MobList extends Phaser.SpriteBatch {
    public onTapping = -1;
    private mobs: {
        [index: number]: Mob,
    } = {};

    constructor(game: Phaser.Game) {
        super(game, game.world, 'MobList');
        for (let i = 0; i < 30; i++) {
            const mob = new Mob(game, i, this);
            this.addChild(mob);
            this.mobs[i] = mob;
        }
    }

    public currentTarget(): Mob | null {
        if (-1 === this.onTapping) {
            return null;
        }
        if (typeof this.mobs[this.onTapping] === 'undefined') {
            throw new Error('Current MobList Target is unknown ' + this.onTapping);
        }
        return this.mobs[this.onTapping];
    }
}

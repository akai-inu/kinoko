import * as Phaser from 'phaser';
import Mob from './Mob';

export default class MobTarget extends Phaser.Sprite {
    constructor(game: Phaser.Game) {
        super(game, -256, -256, 'mob-target');
        game.world.addChild(this);
        this.anchor.setTo(0.5);
        this.visible = false;
    }

    public onTargetMob(mob: Mob | null) {
        if (!mob) {
            throw new Error('undefined mob has received.');
        }
        this.position = mob.position;
        this.visible = true;
    }

    public update() {
        this.angle += 1;
    }
}

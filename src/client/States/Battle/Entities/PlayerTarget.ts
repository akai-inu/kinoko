import * as Phaser from 'phaser';

export default class PlayerTarget extends Phaser.Sprite {
    constructor(game: Phaser.Game) {
        super(game, -256, -256, 'player-target');
        game.world.addChild(this);
        this.anchor.setTo(0.5);
        this.alpha = 0;
        this.visible = false;
    }

    public appear(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.alpha = 1;
        this.visible = true;
    }

    public update() {
        this.angle += 1;
    }
}

import * as Phaser from 'phaser';

export default class PlayerTarget extends Phaser.Sprite {
    constructor(game: Phaser.Game) {
        super(game, -256, -256, 'player-target');
        game.world.addChild(this);
        this.anchor.setTo(0.5);
        this.visible = false;
    }

    public onPlayerMove(point: Phaser.Point) {
        this.x = point.x;
        this.y = point.y;
        this.visible = true;
    }

    public update() {
        this.angle += 1;
    }
}

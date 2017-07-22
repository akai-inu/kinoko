import * as Phaser from 'phaser';

export default class Mob extends Phaser.Sprite {
    constructor(game: Phaser.Game) {
        super(game, game.rnd.between(64, 750), game.rnd.between(64, 550), 'mob');
        game.physics.enable(this);
        this.anchor.set(0.5);
        this.getBody().allowRotation = true;
        this.angle = game.rnd.angle();
        this.getBody().velocity = game.physics.arcade.velocityFromAngle(this.angle, 0.8);
        this.getBody().setCircle(3, 3, 3);
        this.getBody().collideWorldBounds = true;
        this.getBody().maxVelocity.set(1);
    }

    private getBody(): Phaser.Physics.Arcade.Body {
        return this.body;
    }
}

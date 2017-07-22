import * as Phaser from 'phaser';

export default class Mob extends Phaser.Sprite {
    private index: number;
    private list: any;

    constructor(game: Phaser.Game, index: number, list: any) {
        super(game, game.rnd.between(64, 750), game.rnd.between(64, 550), 'mob');
        this.index = index;
        this.list = list;
        game.physics.enable(this);
        this.anchor.set(0.5);
        this.getBody().allowRotation = true;
        this.angle = game.rnd.angle();
        this.getBody().velocity = game.physics.arcade.velocityFromAngle(this.angle, 0.8);
        this.getBody().setCircle(16, 3, 3);
        this.getBody().collideWorldBounds = true;
        this.getBody().maxVelocity.set(1);
        this.inputEnabled = true;
        this.events.onInputDown.add(this.onInputDown.bind(this));
        this.events.onInputUp.add(this.onInputUp.bind(this));
    }

    private onInputDown() {
        this.list.onTapping = this.index;
    }

    private onInputUp() {
        if (this.index === this.list.onTapping) {
            this.list.onTapping = -1;
        }
    }

    private getBody(): Phaser.Physics.Arcade.Body {
        return this.body;
    }
}

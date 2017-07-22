import * as Phaser from 'phaser';

export default class Player extends Phaser.Sprite {
    private moveTarget = new Phaser.Point(-1, -1);
    private physics: Phaser.Physics.Arcade;

    constructor(game: Phaser.Game) {
        super(game, 32, 32, 'player');
        this.anchor.setTo(0.5, 0.5);
        this.physics = game.physics.arcade;
        this.physics.enable(this);
        this.getBody().maxVelocity.set(2);

        game.input.onTap.add(this.onTap.bind(this));
    }

    public update() {
        this.moveToTarget();
    }

    private onTap(pointer: Phaser.Pointer, doubleTap: boolean) {
        this.moveTarget = pointer.position.clone();

        // @todo コマンドの発行
    }

    /**
     * body に型を定義するためのゲッター
     *
     * @returns {Phaser.Physics.Arcade.Body}
     */
    private getBody(): Phaser.Physics.Arcade.Body {
        return this.body;
    }

    private moveToTarget() {
        if (-1 === this.moveTarget.x && -1 === this.moveTarget.y) {
            // 初期値なのでクリックなし
            return;
        }

        if (3 > this.physics.distanceBetween(this, this.moveTarget)) {
            // 近いので移動なし
            // @todo 移動が終わったフレームなら終わったコマンドの発行
        }

        this.physics.moveToXY(this, this.moveTarget.x, this.moveTarget.y, 1, 1000);
    }
}

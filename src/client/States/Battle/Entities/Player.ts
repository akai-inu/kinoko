import * as Phaser from 'phaser';

export default class Player extends Phaser.Sprite {
    public moveTarget = new Phaser.Point(-1, -1);
    private physics: Phaser.Physics.Arcade;

    constructor(game: Phaser.Game) {
        super(game, 32, 32, 'player');
        game.world.addChild(this);
        this.anchor.setTo(0.5, 0.5);
        this.physics = game.physics.arcade;
        this.physics.enable(this);
        this.getBody().maxVelocity.set(2);
    }

    public update() {
        this.moveToTarget();
    }

    public onPlayerMove(point: Phaser.Point) {
        // 移動先を更新する
        this.moveTarget = point;
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

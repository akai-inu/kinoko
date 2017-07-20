import * as Phaser from 'phaser';

let game: Phaser.Game;

export default class {
  player: Phaser.Sprite;
  lastTapped: Phaser.Point;

  constructor() {
    game = new Phaser.Game(800, 600, Phaser.AUTO, null, this, false, false, null);
  }

  preload() {
    game.load.image('player', 'assets/player.png');
  }

  create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.player = game.add.sprite(256, 256, 'player');
    this.player.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(this.player);
    this.player.body.maxVelocity.set(2);
    this.player.body.maxAngular = 100;
    this.player.body.angularDrag = 50;
    this.player.body.drag.set(50);

    game.input.onTap.add(this.onTap.bind(this));
  }

  onTap(pointer: Phaser.Point, doubletap: boolean) {
    this.lastTapped = pointer;
  }

  update() {
    if (this.lastTapped && 3 < game.physics.arcade.distanceBetween(this.player, this.lastTapped)) {
      game.physics.arcade.moveToXY(this.player, this.lastTapped.x, this.lastTapped.y, 2, 10000);
    }
  }

  render() {
    if (this.lastTapped) {
      game.debug.text(`lastTapped : ${this.lastTapped.x}, ${this.lastTapped.y}`, 0, 16);
    }
    game.debug.spriteInfo(this.player, 0, 32);
  }
}
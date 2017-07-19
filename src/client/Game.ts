import * as Phaser from 'phaser';

let game: Phaser.Game;

export default class {
  constructor() {
    game = new Phaser.Game(800, 600, Phaser.AUTO, null, this, false, false, null);
  }

  preload() {
    game.load.spritesheet('player', 'assets/player.png', 32, 32);
  }

  create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    const player = game.add.sprite(128, 128, 'player', 0);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
  }

  /**
   * ゲームインスタンスを取得する
   *
   * @return Phaser.Game
   */
  static getInstance(): Phaser.Game {
    return game;
  }
}
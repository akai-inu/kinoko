/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts"/>
/// <reference path="../../node_modules/phaser/typescript/pixi.d.ts"/>

import 'PIXI';
import 'p2';
import * as Phaser from 'phaser';

export default class {
  game: Phaser.Game;

  constructor() {
    this.game = new Phaser.Game(854, 480, Phaser.AUTO, "content", this);
  }

  preload() {
  }

  create() {
  }

  update() {
  }
}
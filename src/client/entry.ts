// tslint:disable:no-reference
/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts"/>
/// <reference path="../../node_modules/phaser/typescript/pixi.d.ts"/>

import 'p2';
import 'PIXI';
import Game from './Game';

window.onload = () => {
  (new Game()).start();
};

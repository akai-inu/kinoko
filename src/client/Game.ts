import {AUTO, Game} from 'phaser';
import * as StateList from './StateList';
import BattleState from './States/Battle/BattleState';
import BootState from './States/Boot/BootState';
import LoadState from './States/Load/LoadState';

const width = 800;
const height = 600;
const renderer = AUTO;
const parentDOM = undefined;
const state = undefined;
const transparent = false;
const antialias = false;
// @link https://github.com/photonstorm/phaser/blob/v2.6.2/src/physics/Physics.js#L112
const physicsConfig = {
  arcade: true,
  box2d: false,
  matter: false,
  ninja: false,
  p2: false,
};

export default class MainGame extends Game {
  constructor() {
    super(width, height, renderer, parentDOM, state, transparent, antialias, physicsConfig);
  }

  public start() {
    this.state.add(StateList.STATE_BOOT, BootState);
    this.state.add(StateList.STATE_LOAD, LoadState);
    this.state.add(StateList.STATE_BATTLE, BattleState);
    this.state.start(StateList.STATE_BOOT);
  }
}

import {State} from 'phaser';
import MobList from './Entities/MobList';
import Player from './Entities/Player';

/**
 * 戦闘ステート
 */
export default class extends State {
    public create() {
        console.log('Starting BattleState');
        this.world.add(new Player(this.game));
        this.world.add(new MobList(this.game));
    }
}

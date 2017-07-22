import {State} from 'phaser';
import MobList from './Entities/MobList';
import MobTarget from './Entities/MobTarget';
import Player from './Entities/Player';
import PlayerTarget from './Entities/PlayerTarget';
import OnPlayerClick from './Events/OnPlayerClick';

/**
 * 戦闘ステート
 */
export default class extends State {
    public create() {
        console.log('Starting BattleState');
        const mobList = new MobList(this.game);
        const mobTarget = new MobTarget(this.game);
        const player = new Player(this.game);
        const playerTarget = new PlayerTarget(this.game);

        this.game.input.onTap.add(OnPlayerClick(mobList, mobTarget, player, playerTarget));
    }
}

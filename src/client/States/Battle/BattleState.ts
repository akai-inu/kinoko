import {State} from 'phaser';
import MobList from './Entities/MobList';
import Player from './Entities/Player';
import PlayerTarget from './Entities/PlayerTarget';
import OnPlayerClick from './Events/OnPlayerClick';

/**
 * 戦闘ステート
 */
export default class extends State {
    public create() {
        console.log('Starting BattleState');
        const player = new Player(this.game);
        const mobList = new MobList(this.game);
        const playerTarget = new PlayerTarget(this.game);
        player.onPlayerClick.add(OnPlayerClick(mobList, player, playerTarget));
    }
}

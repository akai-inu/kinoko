import {State} from 'phaser';
import {STATE_BATTLE} from '../../StateList';

/**
 * ゲームローディング
 *
 * データのpreloadを行う
 */
export default class extends State {
    public preload() {
        console.log('Starting LoadState');
        const loadingText = this.game.add.text(0, 32, 'Loading...', {
            boundsAlignH: 'center',
            boundsAlignV: 'middle',
        });
        loadingText.setTextBounds(0, 0, 800, 100);

        this.game.load.image('player', 'assets/player.png');
        this.game.load.image('mob', 'assets/mob.png');
    }

    public create() {
        // バトルステートに移動
        this.game.state.start(STATE_BATTLE);
    }
}

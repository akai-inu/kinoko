import {Physics, State} from 'phaser';
import {STATE_LOAD} from '../../StateList';

/**
 * ゲームブーティング
 *
 * ゲーム全体の初期設定を行うステート
 */
export default class extends State {
    public create() {
        console.log('Starting BootState');

        // アーケード物理エンジンをスタート
        this.game.physics.startSystem(Physics.ARCADE);

        // ロードステートに移動
        this.game.state.start(STATE_LOAD);
    }
}

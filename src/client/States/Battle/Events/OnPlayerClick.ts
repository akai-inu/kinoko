import * as Phaser from 'phaser';
import MobList from '../Entities/MobList';
import MobTarget from '../Entities/MobTarget';
import Player from '../Entities/Player';
import PlayerTarget from '../Entities/PlayerTarget';

export default function OnPlayerClick(mobList: MobList, mobTarget: MobTarget, player: Player, playerTarget: PlayerTarget): (pointer: Phaser.Pointer, doubletap: boolean) => void {
    return (pointer: Phaser.Pointer, doubletap: boolean) => {
        console.log(`OnPlayerClick to ${pointer.position.x}, ${pointer.position.y}`);

        if (mobList.currentTarget()) {
            // @todo 攻撃コマンド
            mobTarget.onTargetMob(mobList.currentTarget());
            return;
        }

        if (true) {
            // 移動コマンド
            const pos = pointer.position.clone();
            playerTarget.onPlayerMove(pos);
            player.onPlayerMove(pos);
            return;
        }
    };
}

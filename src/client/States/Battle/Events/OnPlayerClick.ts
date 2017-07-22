import * as Phaser from 'phaser';
import MobList from '../Entities/MobList';
import Player from '../Entities/Player';
import PlayerTarget from '../Entities/PlayerTarget';

export default function OnPlayerClick(mobList: MobList, player: Player, playerTarget: PlayerTarget): (point: Phaser.Point) => void {
    return (point: Phaser.Point) => {
        console.log(`OnPlayerClick to ${player.moveTarget.x}, ${player.moveTarget.y}`);
        playerTarget.appear(player.moveTarget.x, player.moveTarget.y);
    };
}

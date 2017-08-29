import debug = require('debug')
import BaseState from '../BaseState'
import MobList from './Entities/MobList'
import MobTarget from './Entities/MobTarget'
import Player from './Entities/Player'
import PlayerTarget from './Entities/PlayerTarget'
import OnPlayerClick from './Events/OnPlayerClick'

const log = debug('kinoko:state:battle')

/**
 * 戦闘ステート
 */
export default class extends BaseState {
    public create() {
        log('Starting BattleState')
        const mobList = new MobList(this.game)
        const mobTarget = new MobTarget(this.game)
        const player = new Player(this.game)
        const playerTarget = new PlayerTarget(this.game)
        this.addEntity('mobList', mobList)
        this.addEntity('player', player)
        this.addEntity('playerTarget', playerTarget)
        this.addEntity('mobTarget', mobTarget)

        this.game.input.onTap.add(OnPlayerClick(mobList, mobTarget, player, playerTarget))
    }
}

import debug = require('debug')
import {State} from 'phaser'

const log = debug('kinoko:state:base')

/**
 * 戦闘ステート
 */
export default class BaseState extends State {
    private entities: {[id: string]: any} = {}

    public addEntity(id: string, obj: any) {
        if (this.entities[id]) {
            throw new Error(`${this} already has entity ${id}`)
        }
        this.entities[id] = obj
        log(`added entity ${id} to ${this}`)
    }

    public getEntity(id: string): any {
        if (!this.entities[id]) {
            log(`try to get null entity ${id} from ${this}`)
            return null
        }
    }
}

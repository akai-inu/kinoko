import Command from './Command';

export default class {
    private pooledCommands: Command[];
    constructor() {
        this.pooledCommands = [];
    }
}

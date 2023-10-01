import { Collection } from '@chalkysticks/sdk-core';
import * as Model from '../Model';

/**
 * @class Player
 * @package Collection
 * @project ChalkySticks SDK Players
 */
export default class Player extends Collection.Base<Model.Player> {
    /**
     * Endpoint key
     * e.g. https://api.chalkysticks.com/v1/player
     *
     * @type string
     */
    public endpoint: string = 'player';

    /**
     * Model object instantiated by this collection
     *
     * @type ModelPlayer
     */
    public model: Model.Player = new Model.Player();
}

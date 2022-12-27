import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelPlayer from '../Model/Player';

/**
 * @class CollectionPlayer
 * @package Collection
 * @project ChalkySticks SDK Players
 */
export default class CollectionPlayer extends CollectionBase<ModelPlayer> {
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
    public model: ModelPlayer = new ModelPlayer();
}

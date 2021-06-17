import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelPlayer from '../Model/Player';

/**
 * ┌────────────────────────────────────────────────────────────────────────────┐
 * │                                                                            │
 * │ CollectionPlayer                                                           │
 * │                                                                            │
 * │ @namespace Collection                                                      │
 * │ @package   SDK-Player                                                      │
 * │ @project   ChalkySticks                                                    │
 * │                                                                            │
 * └────────────────────────────────────────────────────────────────────────────┘
 */
export default class CollectionPlayer extends CollectionBase {
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
    public model: any = ModelPlayer;
}

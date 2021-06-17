import { ModelBase } from '@chalkysticks/sdk-core';

/**
 * ┌────────────────────────────────────────────────────────────────────────────┐
 * │                                                                            │
 * │ ModelPlayer                                                                │
 * │                                                                            │
 * │ @namespace Model                                                           │
 * │ @package   SDK-Player                                                      │
 * │ @project   ChalkySticks                                                    │
 * │                                                                            │
 * └────────────────────────────────────────────────────────────────────────────┘
 */
export default class ModelPlayer extends ModelBase {
    /**
     * Endpoint key
     * e.g. https://api.chalkysticks.com/v3/player
     *
     * @type string
     */
    public endpoint: string = 'player';

    /**
     * List of fields available
     *
     * @type string[]
     */
    public fields: string[] = [
        'id',
        'created_at',
        'updated_at',
    ];


    // region: Getters
    // ---------------------------------------------------------------------------

    // Not implemented

    // endregion: Getters

}

import { Model } from '@chalkysticks/sdk-core';

/**
 * @class Player
 * @package Model
 * @project ChalkySticks SDK Players
 */
export class Player extends Model.Base {
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
}

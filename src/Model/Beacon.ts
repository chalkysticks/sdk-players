import { Model } from '@chalkysticks/sdk-core';

/**
 * @class Beacon
 * @package Model
 * @project ChalkySticks SDK Players
 */
export class Beacon extends Model.Base {
	/**
	 * Endpoint key
	 * e.g. https://api.chalkysticks.com/v1/beacons
	 *
	 * @type string
	 */
	public endpoint: string = 'beacons';

	/**
	 * List of fields available
	 *
	 * @type string[]
	 */
	public fields: string[] = ['id', 'lat', 'lon', 'distance', 'time_ago', 'status', 'keepalive', 'created_at', 'updated_at'];

	// region: Getters
	// ---------------------------------------------------------------------------

	/**
	 * @return number
	 */
	public getDistance(): number {
		return parseFloat(this.attr('distance') as string);
	}

	/**
	 * @return number
	 */
	public getKeepAlive(): number {
		return parseFloat(this.attr('keepalive') as string);
	}

	/**
	 * @return number
	 */
	public getLatitude(): number {
		return parseFloat(this.attr('latitude') as string);
	}

	/**
	 * @return number
	 */
	public getLongitude(): number {
		return parseFloat(this.attr('longitude') as string);
	}

	/**
	 * @return string
	 */
	public getStatus(): string {
		return this.attr('status') as string;
	}

	/**
	 * @return string
	 */
	public getTimeAgo(): string {
		return this.attr('time_ago') as string;
	}

	// endregion: Getters

	// region: Relationships
	// ---------------------------------------------------------------------------

	public get user(): Model.User {
		return this.hasOne<Model.User>('user', Model.User);
	}

	// endregion: Relationships
}

import { Collection } from '@chalkysticks/sdk-core';
import * as Model from '../Model';

/**
 * @class Beacon
 * @package Collection
 * @project ChalkySticks SDK Players
 */
export class Beacon extends Collection.Base<Model.Beacon> {
	/**
	 * Search for beacons within a certain distance of a location
	 *
	 * @param number latitude
	 * @param number longitude
	 * @param number distance
	 * @return Promise<Beacon>
	 */
	public static async search(latitude: number, longitude: number, distance: number = 9999): Promise<Beacon> {
		const collection = new Beacon();
		const response = await collection.fetch(
			{},
			{
				lat: latitude,
				lon: longitude,
				d: distance,
			},
		);

		return collection;
	}

	/**
	 * Endpoint key
	 * e.g. https://api.chalkysticks.com/v1/beacon
	 *
	 * @type string
	 */
	public endpoint: string = 'beacons';

	/**
	 * Model object instantiated by this collection
	 *
	 * @type ModelBeacon
	 */
	public model: Model.Beacon = new Model.Beacon();
}

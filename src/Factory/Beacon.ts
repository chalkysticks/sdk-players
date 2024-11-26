import * as Collection from '../Collection';
import * as Model from '../Model';
import { Constants } from '@chalkysticks/sdk-core';

/**
 * @param Record<string, any> options
 * @return Model.Beacon
 */
export function model(options: Record<string, any> = {}): Model.Beacon {
	return new Model.Beacon(
		undefined,
		Object.assign(
			{
				baseUrl: Constants.API_URL_V1,
			},
			options,
		),
	);
}

/**
 * @param Record<string, any> options
 * @return Collection.Beacon
 */
export function collection(options: Record<string, any> = {}): Collection.Beacon {
	const collection = new Collection.Beacon(
		Object.assign(
			{
				baseUrl: Constants.API_URL_V1,
			},
			options,
		),
	);

	return collection;
}

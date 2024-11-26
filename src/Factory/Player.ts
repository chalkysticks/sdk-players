import * as Collection from '../Collection';
import * as Model from '../Model';
import { Constants } from '@chalkysticks/sdk-core';

/**
 * @param Record<string, any> options
 * @return Model.Player
 */
export function model(options: Record<string, any> = {}): Model.Player {
	return new Model.Player(
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
 * @return Collection.Player
 */
export function collection(options: Record<string, any> = {}): Collection.Player {
	const collection = new Collection.Player(
		Object.assign(
			{
				baseUrl: Constants.API_URL_V1,
			},
			options,
		),
	);

	return collection;
}

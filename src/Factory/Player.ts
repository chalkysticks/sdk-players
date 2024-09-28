import * as Collection from '../Collection';
import * as Model from '../Model';
import { Constants } from '@chalkysticks/sdk-core';

/**
 * @return Model.Player
 */
export function model(): Model.Player {
	return new Model.Player(undefined, {
		baseUrl: Constants.API_URL_V1,
	});
}

/**
 * @return Collection.Player
 */
export function collection(): Collection.Player {
	const collection = new Collection.Player({
		baseUrl: Constants.API_URL_V1,
	});

	return collection;
}

import * as Collection from '../Collection';
import * as Model from '../Model';
import { Constants } from '@chalkysticks/sdk-core';

/**
 * @return Model.Beacon
 */
export function model(): Model.Beacon {
	return new Model.Beacon(undefined, {
		baseUrl: Constants.API_URL_V1,
	});
}

/**
 * @return Collection.Beacon
 */
export function collection(): Collection.Beacon {
	const collection = new Collection.Beacon({
		baseUrl: Constants.API_URL_V1,
	});

	return collection;
}

import * as Collection from '../Collection';
import * as Model from '../Model';
import { Constants } from '@chalkysticks/sdk-core';
export function model() {
    return new Model.Player({
        baseUrl: Constants.API_URL_V1,
    });
}
export function collection() {
    const collection = new Collection.Player({
        baseUrl: Constants.API_URL_V1,
    });
    return collection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0ZhY3RvcnkvUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxVQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sS0FBSyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUtuRCxNQUFNLFVBQVUsS0FBSztJQUNwQixPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN2QixPQUFPLEVBQUUsU0FBUyxDQUFDLFVBQVU7S0FDN0IsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUtELE1BQU0sVUFBVSxVQUFVO0lBQ3pCLE1BQU0sVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN4QyxPQUFPLEVBQUUsU0FBUyxDQUFDLFVBQVU7S0FDN0IsQ0FBQyxDQUFDO0lBRUgsT0FBTyxVQUFVLENBQUM7QUFDbkIsQ0FBQyJ9
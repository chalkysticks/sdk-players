import { Collection } from '@chalkysticks/sdk-core';
import * as Model from '../Model';
export class Beacon extends Collection.Base {
    constructor() {
        super(...arguments);
        this.endpoint = 'beacons';
        this.model = new Model.Beacon();
    }
    static async search(latitude, longitude, distance = 9999) {
        const collection = new Beacon();
        const response = await collection.fetch({}, {
            lat: latitude,
            lon: longitude,
            d: distance,
        });
        return collection;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmVhY29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbGxlY3Rpb24vQmVhY29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEtBQUssS0FBSyxNQUFNLFVBQVUsQ0FBQztBQU9sQyxNQUFNLE9BQU8sTUFBTyxTQUFRLFVBQVUsQ0FBQyxJQUFrQjtJQUF6RDs7UUE2QlEsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQU83QixVQUFLLEdBQWlCLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2pELENBQUM7SUE1Qk8sTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBZ0IsRUFBRSxTQUFpQixFQUFFLFdBQW1CLElBQUk7UUFDdEYsTUFBTSxVQUFVLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUNoQyxNQUFNLFFBQVEsR0FBRyxNQUFNLFVBQVUsQ0FBQyxLQUFLLENBQ3RDLEVBQUUsRUFDRjtZQUNDLEdBQUcsRUFBRSxRQUFRO1lBQ2IsR0FBRyxFQUFFLFNBQVM7WUFDZCxDQUFDLEVBQUUsUUFBUTtTQUNYLENBQ0QsQ0FBQztRQUVGLE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7Q0FnQkQifQ==
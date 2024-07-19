import { Model } from '@chalkysticks/sdk-core';
export class Beacon extends Model.Base {
    constructor() {
        super(...arguments);
        this.endpoint = 'beacons';
        this.fields = ['id', 'lat', 'lon', 'distance', 'time_ago', 'status', 'keepalive', 'created_at', 'updated_at'];
    }
    getDistance() {
        return parseFloat(this.attr('distance'));
    }
    getKeepAlive() {
        return parseFloat(this.attr('keepalive'));
    }
    getLatitude() {
        return parseFloat(this.attr('lat'));
    }
    getLongitude() {
        return parseFloat(this.attr('lon'));
    }
    getStatus() {
        return this.attr('status');
    }
    getTimeAgo() {
        return this.attr('time_ago');
    }
    get user() {
        return this.hasOne('user', Model.User);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmVhY29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL01vZGVsL0JlYWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPL0MsTUFBTSxPQUFPLE1BQU8sU0FBUSxLQUFLLENBQUMsSUFBSTtJQUF0Qzs7UUFPUSxhQUFRLEdBQVcsU0FBUyxDQUFDO1FBTzdCLFdBQU0sR0FBYSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUF5RDNILENBQUM7SUFqRE8sV0FBVztRQUNqQixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUtNLFlBQVk7UUFDbEIsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFLTSxXQUFXO1FBQ2pCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBS00sWUFBWTtRQUNsQixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUtNLFNBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFXLENBQUM7SUFDdEMsQ0FBQztJQUtNLFVBQVU7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBVyxDQUFDO0lBQ3hDLENBQUM7SUFPRCxJQUFXLElBQUk7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQWEsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBR0QifQ==
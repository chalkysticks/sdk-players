import { Model } from '@chalkysticks/sdk-core';
export declare class Beacon extends Model.Base {
    endpoint: string;
    fields: string[];
    getDistance(): number;
    getKeepAlive(): number;
    getLatitude(): number;
    getLongitude(): number;
    getStatus(): string;
    getTimeAgo(): string;
    get user(): Model.User;
}

import { Collection } from '@chalkysticks/sdk-core';
import * as Model from '../Model';
export declare class Beacon extends Collection.Base<Model.Beacon> {
    static search(latitude: number, longitude: number, distance?: number): Promise<Beacon>;
    endpoint: string;
    model: Model.Beacon;
}

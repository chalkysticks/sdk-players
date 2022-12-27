import { CollectionBase } from '@chalkysticks/sdk-core';
import ModelPlayer from '../Model/Player';
export default class CollectionPlayer extends CollectionBase<ModelPlayer> {
    endpoint: string;
    model: ModelPlayer;
}

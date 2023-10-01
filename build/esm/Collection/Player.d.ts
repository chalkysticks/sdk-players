import { Collection } from '@chalkysticks/sdk-core';
import * as Model from '../Model';
export default class Player extends Collection.Base<Model.Player> {
    endpoint: string;
    model: Model.Player;
}

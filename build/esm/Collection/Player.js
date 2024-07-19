import { Collection } from '@chalkysticks/sdk-core';
import * as Model from '../Model';
export class Player extends Collection.Base {
    constructor() {
        super(...arguments);
        this.endpoint = 'player';
        this.model = new Model.Player();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbGxlY3Rpb24vUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEtBQUssS0FBSyxNQUFNLFVBQVUsQ0FBQztBQU9sQyxNQUFNLE9BQU8sTUFBTyxTQUFRLFVBQVUsQ0FBQyxJQUFrQjtJQUF6RDs7UUFPUSxhQUFRLEdBQVcsUUFBUSxDQUFDO1FBTzVCLFVBQUssR0FBaUIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakQsQ0FBQztDQUFBIn0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const sdk_core_1 = require("@chalkysticks/sdk-core");
class Player extends sdk_core_1.Model.Base {
    constructor() {
        super(...arguments);
        this.endpoint = 'player';
        this.fields = [
            'id',
            'name',
            'created_at',
            'updated_at',
        ];
    }
    getName() {
        return this.attr('name');
    }
}
exports.Player = Player;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL01vZGVsL1BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBK0M7QUFPL0MsTUFBYSxNQUFPLFNBQVEsZ0JBQUssQ0FBQyxJQUFJO0lBQXRDOztRQU9XLGFBQVEsR0FBVyxRQUFRLENBQUM7UUFPNUIsV0FBTSxHQUFhO1lBQ3RCLElBQUk7WUFDVixNQUFNO1lBQ0EsWUFBWTtZQUNaLFlBQVk7U0FDZixDQUFDO0lBY04sQ0FBQztJQU5PLE9BQU87UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFXLENBQUM7SUFDcEMsQ0FBQztDQUlEO0FBakNELHdCQWlDQyJ9
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@chalkysticks/sdk-core");
class ModelPlayer extends sdk_core_1.ModelBase {
    constructor() {
        super(...arguments);
        this.endpoint = 'player';
        this.fields = [
            'id',
            'created_at',
            'updated_at',
        ];
    }
}
exports.default = ModelPlayer;
//# sourceMappingURL=Player.js.map
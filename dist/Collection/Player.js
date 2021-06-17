"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@chalkysticks/sdk-core");
const Player_1 = require("../Model/Player");
class CollectionPlayer extends sdk_core_1.CollectionBase {
    constructor() {
        super(...arguments);
        this.endpoint = 'player';
        this.model = Player_1.default;
    }
}
exports.default = CollectionPlayer;
//# sourceMappingURL=Player.js.map
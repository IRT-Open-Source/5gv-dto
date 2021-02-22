"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConfigDto {
    constructor(name, configItems, cronJobActive, cronJobInterval) {
        this.name = name;
        this.configItems = configItems;
        this.cronJobActive = cronJobActive;
        this.cronJobInterval = cronJobInterval || null;
    }
}
exports.ConfigDto = ConfigDto;
//# sourceMappingURL=config.dto.js.map
import { ConfigItemDto } from './config-item.dto';
export declare class ConfigDto {
    name: string;
    configItems: ConfigItemDto[];
    cronJobActive: boolean;
    cronJobInterval: number;
    constructor(name: string, configItems: ConfigItemDto[], cronJobActive: boolean, cronJobInterval?: number);
}

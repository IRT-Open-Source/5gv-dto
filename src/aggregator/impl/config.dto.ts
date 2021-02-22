import { ConfigItemDto } from './config-item.dto';

export class ConfigDto {
  name: string;
  configItems: ConfigItemDto[];
  cronJobActive: boolean;
  cronJobInterval: number;

  constructor(
    name: string,
    configItems: ConfigItemDto[],
    cronJobActive: boolean,
    cronJobInterval?: number,
  ) {
    this.name = name;
    this.configItems = configItems;
    this.cronJobActive = cronJobActive;
    this.cronJobInterval = cronJobInterval || null;
  }
}

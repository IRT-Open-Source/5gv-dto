export class ConfigItemDto {
  criterion: string;
  value: number;

  constructor(criterion: string, value: number) {
    this.criterion = criterion;
    this.value = value;
  }
}

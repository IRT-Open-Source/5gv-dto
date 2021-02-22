import { ReferenceDto } from './reference.dto';

export class SetDto {
  readonly type: string;
  readonly self: ReferenceDto;
  readonly id: string;
  readonly title: string;
  readonly first: ReferenceDto;
  readonly next: ReferenceDto;
  readonly last: ReferenceDto;
  readonly total: number;
  readonly elements: ReferenceDto[];
}

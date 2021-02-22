import { PublicationSetReferenceDto } from './publication-set-reference.dto';
import { PublicationReferenceDto } from '../publication/publication-reference.dto';
import { SetDto } from '../set.dto';

export class PublicationSetDto extends SetDto {
  readonly self: PublicationSetReferenceDto;
  readonly first: PublicationSetReferenceDto;
  readonly next: PublicationSetReferenceDto;
  readonly last: PublicationSetReferenceDto;
  readonly elements: PublicationReferenceDto[];
}

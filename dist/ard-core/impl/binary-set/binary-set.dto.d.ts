import { BinaryReferenceDto } from '../binary/binary-reference.dto';
import { BinarySetReferenceDto } from './binary-set-reference.dto';
import { SetDto } from '../set.dto';
export declare class BinarySetDto extends SetDto {
    readonly self: BinarySetReferenceDto;
    readonly first: BinarySetReferenceDto;
    readonly next: BinarySetReferenceDto;
    readonly last: BinarySetReferenceDto;
    readonly elements: BinaryReferenceDto[];
}

import { PublicationReferenceDto } from './publication-reference.dto';
import { BinaryReferenceDto } from '../binary/binary-reference.dto';
export declare class PublicationDto {
    readonly type: string;
    readonly self: PublicationReferenceDto;
    readonly id: string;
    readonly title: string;
    readonly binaries: BinaryReferenceDto[];
    readonly plotSummary: string;
    readonly availableTo: string;
    readonly availableFrom: string;
    readonly imageCollections: any[];
}

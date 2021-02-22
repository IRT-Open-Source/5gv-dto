import { PublicationSetReferenceDto } from '../publication-set/publication-set-reference.dto';
import { ItemReferenceDto } from './item-reference.dto';
export declare class ItemDto {
    readonly type: string;
    readonly self: ItemReferenceDto;
    readonly id: string;
    readonly title: string;
    readonly publications: PublicationSetReferenceDto;
}

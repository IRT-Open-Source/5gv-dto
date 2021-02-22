import { DataBaseDoc } from './data-base-doc.dto';

export class CacheAsset extends DataBaseDoc {
  mediaItemId: string;
  url: string;
  urlHash: string;
  available: boolean;
}

import { DataBaseDoc } from './data-base-doc.dto';
import { ImageDescription } from './image-description.dto';
import { VideoStreamDescription } from './video-stream-description.dto';

export class MediaItem extends DataBaseDoc {
  id: string;
  title: string;
  synopsis: string;
  availableTo: string;
  images: ImageDescription[];
  streams: VideoStreamDescription[];
}

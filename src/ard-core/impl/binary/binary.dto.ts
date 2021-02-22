import { BinaryReferenceDto } from './binary-reference.dto';

export class BinaryDto {
  readonly type: string;
  readonly href: string;
  readonly mediaType: string;
  readonly adaptivity: string;
  readonly self: BinaryReferenceDto;
  readonly title: string;
  readonly videoBitrate: number;
  readonly resolution: string;
  readonly aspectRatio: string;
  readonly framerate: string;
  readonly color: string;
  readonly audioCodec: string;
  readonly audioBitrate: number;
  readonly sampleRate: number;
}

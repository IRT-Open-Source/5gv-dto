export class PlayerDto {
  availableTo: string;
  blockedByFsk: boolean;
  broadcastedOn: string;
  embeddable: boolean;
  geoblocked: boolean;
  id: string;
  image: {
    alt: string;
    producerName: string;
    src: string;
    title: string;
  };
  maturityContentRating: string;
  mediaCollection: {
    embedded: {
      _type: string;
      _isLive: boolean;
      _defaultQuality: Array<string | number>;
      _previewImage: string;
      _subtitleUrl: string;
      _subtitleOffset: 0;
      _mediaArray: [
        {
          _plugin: number;
          _mediaStreamArray: [
            {
              _quality: number;
              _server: string;
              _cdn: string;
              width: number;
              _height: number;
              _stream: string | string[];
            },
          ];
        },
      ];
      _alternativeMediaArray: [];
      _sortierArray: number[];
      _duration: number;
      _dvrEnabled: boolean;
      _geoblocked: boolean;
    };
    href: string;
  };

  personalized: boolean;

  links: {
    self: {
      id: string;
      title: string;
      href: string;
      type: string;
    };
  };

  show: {
    id: string;
    title: string;
    image: {
      alt: string;
      producerName: string;
      src: string;
      title: string;
    };
  };

  synopsis: string;
  title: string;
  type: string;
}

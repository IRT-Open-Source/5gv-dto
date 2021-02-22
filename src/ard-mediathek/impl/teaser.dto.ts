export class TeaserDto {
  availableTo: string;
  broadcastedOn: string;
  duration: number;
  id: string;
  images: {
    [key: string]: {
      alt: string;
      producerName: string;
      src: string;
      title: string;
    };
  };
  longTitle: string;
  mediumTitle: string;
  personalized: boolean;
  links: {
    self: {
      id: string;
      title: string;
      href: string;
      type: string;
    };
    target: {
      id: string;
      title: string;
      href: string;
      type: string;
    };
  };
  shortTitle: string;
  type: string;
}

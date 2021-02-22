import { TeaserDto } from './teaser.dto';

export class CompilationDto {
  compilationType: string;

  id: string;

  pagination: {
    pageNumber: number;
    pageSize: number;
    totalElements: number;
  };

  links: {
    self: {
      id: string;
      title: string;
      href: string;
      type: string;
    };
  };

  teasers: TeaserDto[];
}

import { PlayerDto } from './player.dto';
import { CompilationDto } from './compilation.dto';

export class ItemDto {
  fskRating: string;
  id: string;
  personalized: boolean;
  links: {
    self: {
      id: string;
      title: string;
      href: string;
      type: string;
    };
  };
  title: string;
  widgets: Array<PlayerDto | CompilationDto>;
}

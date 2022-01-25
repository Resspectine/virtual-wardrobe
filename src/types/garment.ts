import { File } from './file';
import { ITag } from './tag';

export interface IGarment {
  id: string;
  title: string;
  description: string;
  price: string;
  wearingAmount: number;
  isFavorite: boolean;
  tags?: ITag[];
  picture?: File;
}

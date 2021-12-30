import { ITag } from './tag';

export interface IGarment {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  wearingAmount: number;
  isFavorite: boolean;
  tags?: ITag[];
}

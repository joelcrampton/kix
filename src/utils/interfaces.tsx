import { ImageType } from './types';

export interface PostInterface {
  (brand: string, name: string, image: ImageType): void;
}

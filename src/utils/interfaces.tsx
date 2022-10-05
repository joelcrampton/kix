import { ImageType } from './types';

export interface PostInterface {
  (brand: string, name: string, image: ImageType): void;
}

export interface RemoveInterface {
  (id: string): void;
}

export type Category =
  | 'restaurants'
  | 'museums'
  | 'architecture'
  | 'parks'
  | 'popular'
  | 'churches';

export interface Attraction {
  id?: number;
  name: string;
  address: string;
  category: string;
  latitude: number;
  longitude: number;
}

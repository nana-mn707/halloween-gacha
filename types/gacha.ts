export type Rarity = 'SSR' | 'SR' | 'R' | 'N';

export interface GachaItem {
  id: string;
  name: string;
  rarity: Rarity;
  emoji: string;
  description: string;
  dropRate: number; // percentage
}

export interface GachaResult {
  item: GachaItem;
  timestamp: Date;
}

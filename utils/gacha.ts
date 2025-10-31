import { GachaItem } from '@/types/gacha';
import { GACHA_ITEMS } from '@/data/gachaItems';

export function rollGacha(): GachaItem {
  const random = Math.random() * 100;
  let cumulativeRate = 0;

  for (const item of GACHA_ITEMS) {
    cumulativeRate += item.dropRate;
    if (random <= cumulativeRate) {
      return item;
    }
  }

  // Fallback to last item (should never happen if rates sum to 100)
  return GACHA_ITEMS[GACHA_ITEMS.length - 1];
}

export function rollMultipleGacha(count: number): GachaItem[] {
  return Array.from({ length: count }, () => rollGacha());
}

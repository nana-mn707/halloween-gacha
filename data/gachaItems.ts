import { GachaItem } from '@/types/gacha';

export const GACHA_ITEMS: GachaItem[] = [
  // SSR (1%)
  {
    id: 'ssr-1',
    name: 'Golden Pumpkin King',
    rarity: 'SSR',
    emoji: '🎃',
    description: 'The legendary ruler of Halloween night!',
    dropRate: 0.5,
  },
  {
    id: 'ssr-2',
    name: 'Phantom Reaper',
    rarity: 'SSR',
    emoji: '💀',
    description: 'The most feared spirit of the underworld',
    dropRate: 0.5,
  },

  // SR (5%)
  {
    id: 'sr-1',
    name: 'Vampire Count',
    rarity: 'SR',
    emoji: '🧛',
    description: 'A noble vampire from ancient times',
    dropRate: 1.5,
  },
  {
    id: 'sr-2',
    name: 'Wicked Witch',
    rarity: 'SR',
    emoji: '🧙',
    description: 'Master of dark magic and potions',
    dropRate: 1.5,
  },
  {
    id: 'sr-3',
    name: 'Haunted Castle',
    rarity: 'SR',
    emoji: '🏰',
    description: 'A mysterious castle full of secrets',
    dropRate: 2,
  },

  // R (14%)
  {
    id: 'r-1',
    name: 'Spooky Ghost',
    rarity: 'R',
    emoji: '👻',
    description: 'A friendly but mischievous spirit',
    dropRate: 3.5,
  },
  {
    id: 'r-2',
    name: 'Black Cat',
    rarity: 'R',
    emoji: '🐱',
    description: 'A mysterious feline companion',
    dropRate: 3.5,
  },
  {
    id: 'r-3',
    name: 'Jack-o-Lantern',
    rarity: 'R',
    emoji: '🎃',
    description: 'A carved pumpkin glowing in the night',
    dropRate: 3.5,
  },
  {
    id: 'r-4',
    name: 'Zombie Walker',
    rarity: 'R',
    emoji: '🧟',
    description: 'Risen from the grave',
    dropRate: 3.5,
  },

  // N (80%)
  {
    id: 'n-1',
    name: 'Candy Corn',
    rarity: 'N',
    emoji: '🍬',
    description: 'Classic Halloween candy',
    dropRate: 20,
  },
  {
    id: 'n-2',
    name: 'Lollipop',
    rarity: 'N',
    emoji: '🍭',
    description: 'Sweet treat for trick-or-treaters',
    dropRate: 20,
  },
  {
    id: 'n-3',
    name: 'Spider Web',
    rarity: 'N',
    emoji: '🕸️',
    description: 'Spooky decoration',
    dropRate: 20,
  },
  {
    id: 'n-4',
    name: 'Bat',
    rarity: 'N',
    emoji: '🦇',
    description: 'A creature of the night',
    dropRate: 20,
  },
];

export const RARITY_COLORS = {
  SSR: 'from-yellow-400 via-orange-500 to-red-500',
  SR: 'from-purple-400 via-pink-500 to-purple-600',
  R: 'from-blue-400 via-cyan-500 to-blue-600',
  N: 'from-gray-400 via-gray-500 to-gray-600',
};

export const RARITY_TEXT_COLORS = {
  SSR: 'text-yellow-300',
  SR: 'text-purple-300',
  R: 'text-blue-300',
  N: 'text-gray-300',
};

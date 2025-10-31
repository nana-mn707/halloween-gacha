import { CandyDefinition } from '@/types/game';

export const CANDY_DATA: CandyDefinition[] = [
  // Common (60% chance)
  { name: 'キャンディ', rank: 'common', calories: 5, emoji: '🍬' },
  { name: 'ガム', rank: 'common', calories: 3, emoji: '🍭' },
  { name: 'グミ', rank: 'common', calories: 4, emoji: '🟣' },

  // Rare (25% chance)
  { name: 'クッキー', rank: 'rare', calories: 10, emoji: '🍪' },
  { name: 'チョコレート', rank: 'rare', calories: 12, emoji: '🍫' },
  { name: 'ドーナツ', rank: 'rare', calories: 15, emoji: '🍩' },

  // Epic (12% chance)
  { name: 'カップケーキ', rank: 'epic', calories: 20, emoji: '🧁' },
  { name: 'パンプキンパイ', rank: 'epic', calories: 25, emoji: '🥧' },

  // Legendary (3% chance)
  { name: 'ハロウィンケーキ', rank: 'legendary', calories: 50, emoji: '🎂' },
  { name: '魔女のキャンディ', rank: 'legendary', calories: 100, emoji: '🧙‍♀️' },
];

export const RANK_COLORS = {
  common: '#9ca3af',
  rare: '#3b82f6',
  epic: '#a855f7',
  legendary: '#f59e0b',
};

export const RANK_RATES = {
  common: 0.60,
  rare: 0.25,
  epic: 0.12,
  legendary: 0.03,
};

export type CandyRank = 'common' | 'rare' | 'epic' | 'legendary';

export interface Candy {
  id: string;
  name: string;
  rank: CandyRank;
  calories: number; // 体重増加量
  emoji: string; // 表示用
}

export interface GameState {
  coins: number;
  weight: number; // 体重
  hunger: number; // 空腹度 (0-100)
  inventory: Candy[];
}

export interface CandyDefinition {
  name: string;
  rank: CandyRank;
  calories: number;
  emoji: string;
}

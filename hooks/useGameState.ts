'use client';

import { useState, useCallback } from 'react';
import { GameState, Candy } from '@/types/game';
import { CANDY_DATA, RANK_RATES } from '@/data/candies';

const INITIAL_STATE: GameState = {
  coins: 10, // 初期コイン
  weight: 60, // 初期体重 (kg)
  hunger: 50, // 初期空腹度
  inventory: [],
};

const GACHA_COST = 1; // ガチャ1回のコスト
const EXERCISE_COIN_REWARD = 2; // 運動で得られるコイン
const EXERCISE_WEIGHT_LOSS = 3; // 運動で減る体重
const EXERCISE_HUNGER_INCREASE = 20; // 運動で増える空腹度

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);

  // ガチャを回す
  const pullGacha = useCallback(() => {
    if (gameState.coins < GACHA_COST) {
      return null;
    }

    // ランダムにお菓子を選ぶ
    const roll = Math.random();
    let cumulativeProbability = 0;
    let selectedRank = 'common';

    for (const [rank, rate] of Object.entries(RANK_RATES)) {
      cumulativeProbability += rate;
      if (roll <= cumulativeProbability) {
        selectedRank = rank;
        break;
      }
    }

    const candidateCandies = CANDY_DATA.filter(c => c.rank === selectedRank);
    const selectedCandy = candidateCandies[Math.floor(Math.random() * candidateCandies.length)];

    const newCandy: Candy = {
      id: `${selectedCandy.name}-${Date.now()}-${Math.random()}`,
      ...selectedCandy,
    };

    setGameState(prev => ({
      ...prev,
      coins: prev.coins - GACHA_COST,
      inventory: [...prev.inventory, newCandy],
    }));

    return newCandy;
  }, [gameState.coins]);

  // お菓子を食べる
  const eatCandy = useCallback((candyId: string) => {
    const candy = gameState.inventory.find(c => c.id === candyId);
    if (!candy) return;

    setGameState(prev => ({
      ...prev,
      weight: prev.weight + candy.calories * 0.1, // カロリーに応じて体重増加
      hunger: Math.max(0, prev.hunger - candy.calories), // 空腹度減少
      inventory: prev.inventory.filter(c => c.id !== candyId),
    }));
  }, [gameState.inventory]);

  // 運動する
  const exercise = useCallback(() => {
    if (gameState.weight <= 40) {
      // 体重が低すぎる場合は運動できない
      return;
    }

    setGameState(prev => ({
      ...prev,
      weight: Math.max(40, prev.weight - EXERCISE_WEIGHT_LOSS),
      hunger: Math.min(100, prev.hunger + EXERCISE_HUNGER_INCREASE),
      coins: prev.coins + EXERCISE_COIN_REWARD,
    }));
  }, [gameState.weight]);

  return {
    gameState,
    pullGacha,
    eatCandy,
    exercise,
  };
}

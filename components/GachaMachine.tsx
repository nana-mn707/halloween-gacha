'use client';

import { useState } from 'react';
import { Candy } from '@/types/game';
import { RANK_COLORS } from '@/data/candies';

interface GachaMachineProps {
  coins: number;
  onPull: () => Candy | null;
}

export default function GachaMachine({ coins, onPull }: GachaMachineProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [lastResult, setLastResult] = useState<Candy | null>(null);

  const handlePull = () => {
    if (coins < 1 || isSpinning) return;

    setIsSpinning(true);
    setLastResult(null);

    // アニメーション
    setTimeout(() => {
      const result = onPull();
      setLastResult(result);
      setIsSpinning(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* ガチャマシン */}
      <div className="relative">
        <div className="w-64 h-80 bg-gradient-to-b from-orange-500 to-orange-600 rounded-3xl border-8 border-orange-700 shadow-2xl">
          {/* 上部の透明部分（お菓子が見える部分） */}
          <div className="m-4 h-40 bg-purple-900 bg-opacity-30 rounded-2xl border-4 border-orange-400 flex items-center justify-center overflow-hidden">
            {isSpinning ? (
              <div className="animate-bounce text-6xl">🎃</div>
            ) : lastResult ? (
              <div className="text-center">
                <div className="text-6xl mb-2">{lastResult.emoji}</div>
                <div
                  className="text-xs font-bold px-2 py-1 rounded"
                  style={{
                    backgroundColor: RANK_COLORS[lastResult.rank],
                    color: 'white',
                  }}
                >
                  {lastResult.rank.toUpperCase()}
                </div>
              </div>
            ) : (
              <div className="text-6xl opacity-50">🎃</div>
            )}
          </div>

          {/* 中央部分 */}
          <div className="px-4 py-2 text-center">
            <div className="bg-black bg-opacity-50 rounded-lg p-2 mb-2">
              <p className="text-yellow-300 font-bold text-lg">
                コイン: {coins} 🪙
              </p>
            </div>
          </div>

          {/* ボタン部分 */}
          <div className="flex justify-center px-4">
            <button
              onClick={handlePull}
              disabled={coins < 1 || isSpinning}
              className={`w-20 h-20 rounded-full font-bold text-white shadow-lg transform transition-all ${
                coins >= 1 && !isSpinning
                  ? 'bg-red-500 hover:bg-red-600 hover:scale-110 active:scale-95'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {isSpinning ? '...' : 'PULL!'}
            </button>
          </div>

          {/* 出口 */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black bg-opacity-50 rounded-b-lg" />
        </div>
      </div>

      {/* 結果表示 */}
      {lastResult && !isSpinning && (
        <div className="text-center animate-fade-in">
          <p className="text-xl font-bold">{lastResult.name} をゲット！</p>
          <p className="text-sm text-gray-600">
            カロリー: {lastResult.calories} kcal
          </p>
        </div>
      )}
    </div>
  );
}

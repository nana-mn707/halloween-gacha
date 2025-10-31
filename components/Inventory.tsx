'use client';

import { Candy } from '@/types/game';
import { RANK_COLORS } from '@/data/candies';

interface InventoryProps {
  candies: Candy[];
  onEat: (candyId: string) => void;
}

export default function Inventory({ candies, onEat }: InventoryProps) {
  if (candies.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-purple-300">
        <h2 className="text-2xl font-bold mb-4 text-center">🎃 お菓子 🎃</h2>
        <p className="text-center text-gray-500">
          ガチャを回してお菓子をゲットしよう！
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-purple-300">
      <h2 className="text-2xl font-bold mb-4 text-center">🎃 お菓子 🎃</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-64 overflow-y-auto">
        {candies.map((candy) => (
          <div
            key={candy.id}
            className="relative group"
          >
            <button
              onClick={() => onEat(candy.id)}
              className="w-full aspect-square rounded-lg border-4 flex flex-col items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-md"
              style={{
                borderColor: RANK_COLORS[candy.rank],
                backgroundColor: `${RANK_COLORS[candy.rank]}15`,
              }}
            >
              <span className="text-4xl">{candy.emoji}</span>
              <span
                className="text-xs font-bold px-2 py-1 rounded text-white"
                style={{ backgroundColor: RANK_COLORS[candy.rank] }}
              >
                {candy.rank}
              </span>
            </button>

            {/* ホバー時の詳細情報 */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
              <div className="font-bold">{candy.name}</div>
              <div>{candy.calories} kcal</div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-gray-600 mt-4">
        お菓子をクリックして食べよう！
      </p>
    </div>
  );
}

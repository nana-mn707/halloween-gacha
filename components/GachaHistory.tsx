'use client';

import { GachaResult } from '@/types/gacha';
import { RARITY_TEXT_COLORS } from '@/data/gachaItems';

interface GachaHistoryProps {
  history: GachaResult[];
}

export default function GachaHistory({ history }: GachaHistoryProps) {
  if (history.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No rolls yet. Try your luck!
      </div>
    );
  }

  return (
    <div className="space-y-3 max-h-96 overflow-y-auto">
      {history.map((result, index) => (
        <div
          key={`${result.item.id}-${index}`}
          className="
            bg-gray-800 rounded-xl p-4 flex items-center gap-4
            transform transition-all duration-300 hover:scale-105
            border border-gray-700 hover:border-gray-600
          "
        >
          <div className="text-4xl">{result.item.emoji}</div>
          <div className="flex-1">
            <div className={`font-semibold ${RARITY_TEXT_COLORS[result.item.rarity]}`}>
              {result.item.name}
            </div>
            <div className="text-sm text-gray-400">{result.item.rarity}</div>
          </div>
          <div className="text-xs text-gray-500">
            {new Date(result.timestamp).toLocaleTimeString()}
          </div>
        </div>
      ))}
    </div>
  );
}

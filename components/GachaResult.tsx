'use client';

import { GachaItem } from '@/types/gacha';
import { RARITY_COLORS, RARITY_TEXT_COLORS } from '@/data/gachaItems';
import { useEffect, useState } from 'react';

interface GachaResultProps {
  item: GachaItem | null;
  show: boolean;
  onClose: () => void;
}

export default function GachaResult({ item, show, onClose }: GachaResultProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (show && item) {
      setTimeout(() => setAnimate(true), 100);
    } else {
      setAnimate(false);
    }
  }, [show, item]);

  if (!show || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div
        className={`
          relative bg-gray-900 rounded-3xl p-8 max-w-md w-full mx-4
          transform transition-all duration-500
          ${animate ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}
        `}
      >
        {/* Rarity Badge */}
        <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r ${RARITY_COLORS[item.rarity]} shadow-xl`}>
          <span className="text-white font-bold text-xl">{item.rarity}</span>
        </div>

        {/* Item Display */}
        <div className="mt-8 flex flex-col items-center gap-6">
          <div
            className={`
              text-9xl
              animate-bounce
              filter drop-shadow-2xl
            `}
          >
            {item.emoji}
          </div>

          <h2 className={`text-3xl font-bold ${RARITY_TEXT_COLORS[item.rarity]}`}>
            {item.name}
          </h2>

          <p className="text-gray-300 text-center text-lg">
            {item.description}
          </p>

          <div className="text-gray-400 text-sm">
            Drop Rate: {item.dropRate}%
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            mt-8 w-full py-4 rounded-xl
            bg-gradient-to-r from-purple-600 to-pink-600
            text-white font-semibold text-lg
            hover:from-purple-700 hover:to-pink-700
            transition-all duration-200
            shadow-lg hover:shadow-purple-500/50
          "
        >
          Close
        </button>

        {/* Sparkle Effects */}
        {(item.rarity === 'SSR' || item.rarity === 'SR') && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random()}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

interface GachaButtonProps {
  onClick: () => void;
  disabled: boolean;
  isRolling: boolean;
}

export default function GachaButton({ onClick, disabled, isRolling }: GachaButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={`
        relative px-12 py-6 text-2xl font-bold text-white rounded-2xl
        transition-all duration-200 transform
        ${isPressed ? 'scale-95' : 'scale-100'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'}
        ${isRolling ? 'animate-pulse' : ''}
        bg-gradient-to-r from-orange-500 via-red-600 to-purple-600
        shadow-2xl hover:shadow-orange-500/50
        disabled:hover:scale-100 disabled:hover:shadow-2xl
      `}
    >
      <span className="relative z-10">
        {isRolling ? '🎃 Rolling... 🎃' : '🎲 Roll Gacha! 🎲'}
      </span>

      {!disabled && !isRolling && (
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-0 hover:opacity-20 transition-opacity" />
      )}
    </button>
  );
}

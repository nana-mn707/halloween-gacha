'use client';

import { useState } from 'react';

interface ExercisePanelProps {
  weight: number;
  onExercise: () => void;
}

export default function ExercisePanel({ weight, onExercise }: ExercisePanelProps) {
  const [isExercising, setIsExercising] = useState(false);

  const handleExercise = () => {
    if (weight <= 40 || isExercising) return;

    setIsExercising(true);

    // アニメーション
    setTimeout(() => {
      onExercise();
      setIsExercising(false);
    }, 1500);
  };

  const canExercise = weight > 40 && !isExercising;

  return (
    <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg p-6 border-4 border-green-700">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        💪 運動 💪
      </h2>

      <div className="bg-white bg-opacity-90 rounded-lg p-4 mb-4">
        <div className="text-sm space-y-2 text-gray-800">
          <p>🏃 運動すると...</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>体重が 3kg 減る</li>
            <li>コインを 2枚 もらえる</li>
            <li>空腹度が 20% 増える</li>
          </ul>
        </div>
      </div>

      <button
        onClick={handleExercise}
        disabled={!canExercise}
        className={`w-full py-4 rounded-lg font-bold text-xl transition-all transform ${
          canExercise
            ? 'bg-yellow-400 hover:bg-yellow-500 hover:scale-105 active:scale-95 text-gray-900 shadow-lg'
            : 'bg-gray-400 text-gray-600 cursor-not-allowed'
        }`}
      >
        {isExercising ? (
          <span className="inline-block animate-bounce">🏃💨</span>
        ) : weight <= 40 ? (
          '体重が足りません'
        ) : (
          '運動する！'
        )}
      </button>

      {weight <= 40 && (
        <p className="text-xs text-center mt-2 text-yellow-100">
          これ以上痩せられません！
        </p>
      )}
    </div>
  );
}

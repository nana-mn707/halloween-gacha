'use client';

import { useGameState } from '@/hooks/useGameState';
import Character from '@/components/Character';
import GachaMachine from '@/components/GachaMachine';
import Inventory from '@/components/Inventory';
import ExercisePanel from '@/components/ExercisePanel';

export default function Home() {
  const { gameState, pullGacha, eatCandy, exercise } = useGameState();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-purple-200 to-pink-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* タイトル */}
        <h1 className="text-5xl font-bold text-center mb-8 text-purple-900 drop-shadow-lg">
          🎃 ハロウィン ガチャガチャ 🎃
        </h1>

        {/* メインコンテンツ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 左カラム：キャラクター */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-300">
              <Character weight={gameState.weight} hunger={gameState.hunger} />
            </div>

            {/* 運動パネル */}
            <ExercisePanel weight={gameState.weight} onExercise={exercise} />
          </div>

          {/* 中央カラム：ガチャマシン */}
          <div className="lg:col-span-1 flex items-start justify-center">
            <GachaMachine coins={gameState.coins} onPull={pullGacha} />
          </div>

          {/* 右カラム：インベントリ */}
          <div className="lg:col-span-1">
            <Inventory candies={gameState.inventory} onEat={eatCandy} />
          </div>
        </div>

        {/* 説明 */}
        <div className="mt-8 bg-white bg-opacity-90 rounded-lg shadow-lg p-6 border-4 border-purple-300 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center text-purple-900">
            🎮 遊び方
          </h2>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>1. ガチャを回す：</strong>
              コインを使ってガチャを回し、ハロウィンのお菓子をゲット！
            </p>
            <p>
              <strong>2. お菓子を食べる：</strong>
              インベントリのお菓子をクリックして食べると、体重が増えて空腹度が減る。
            </p>
            <p>
              <strong>3. 運動する：</strong>
              運動すると体重が減り、コインがもらえるけど、お腹が空く。
            </p>
            <p className="text-sm text-purple-600 mt-4">
              💡 お菓子を食べて太り、運動してコインを稼ぎ、またガチャを回す...自給自足の生活を楽しもう！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

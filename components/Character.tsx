'use client';

interface CharacterProps {
  weight: number;
  hunger: number;
}

export default function Character({ weight, hunger }: CharacterProps) {
  // 体重に応じてキャラクターのサイズを変更
  const getBodySize = (weight: number) => {
    if (weight < 50) return 80;
    if (weight < 60) return 100;
    if (weight < 70) return 120;
    if (weight < 80) return 140;
    return 160;
  };

  const bodySize = getBodySize(weight);
  const headSize = 60;

  // 空腹度に応じて表情を変更
  const getFace = (hunger: number) => {
    if (hunger > 80) return '😫'; // とてもお腹が空いている
    if (hunger > 60) return '😐'; // お腹が空いている
    if (hunger > 30) return '😊'; // 普通
    return '😄'; // 満腹
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative flex flex-col items-center">
        {/* 頭 */}
        <div
          className="bg-orange-200 rounded-full flex items-center justify-center border-4 border-orange-300"
          style={{ width: headSize, height: headSize }}
        >
          <span className="text-3xl">{getFace(hunger)}</span>
        </div>

        {/* 体 */}
        <div
          className="bg-purple-600 rounded-full mt-2 border-4 border-purple-700 transition-all duration-500"
          style={{
            width: bodySize,
            height: bodySize,
          }}
        />

        {/* 腕 */}
        <div className="absolute" style={{ top: headSize + 20 }}>
          <div className="flex gap-4" style={{ width: bodySize + 40 }}>
            <div className="w-4 h-20 bg-orange-200 rounded-full border-2 border-orange-300" />
            <div className="flex-1" />
            <div className="w-4 h-20 bg-orange-200 rounded-full border-2 border-orange-300" />
          </div>
        </div>

        {/* 足 */}
        <div className="flex gap-2 mt-2">
          <div className="w-8 h-16 bg-orange-200 rounded-full border-2 border-orange-300" />
          <div className="w-8 h-16 bg-orange-200 rounded-full border-2 border-orange-300" />
        </div>
      </div>

      {/* ステータス */}
      <div className="text-center space-y-1">
        <p className="text-sm font-bold">体重: {weight.toFixed(1)}kg</p>
        <div className="w-48">
          <div className="flex justify-between text-xs mb-1">
            <span>空腹度</span>
            <span>{hunger.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-red-500 h-full transition-all duration-300"
              style={{ width: `${hunger}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

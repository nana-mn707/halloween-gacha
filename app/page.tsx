'use client';

import { useState } from 'react';
import { GachaItem, GachaResult } from '@/types/gacha';
import { rollGacha } from '@/utils/gacha';
import GachaButton from '@/components/GachaButton';
import GachaResultModal from '@/components/GachaResult';
import GachaHistory from '@/components/GachaHistory';

export default function Home() {
  const [currentItem, setCurrentItem] = useState<GachaItem | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [history, setHistory] = useState<GachaResult[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    SSR: 0,
    SR: 0,
    R: 0,
    N: 0,
  });

  const handleRoll = () => {
    setIsRolling(true);

    // Simulate rolling animation delay
    setTimeout(() => {
      const item = rollGacha();
      setCurrentItem(item);

      // Update history
      const newResult: GachaResult = {
        item,
        timestamp: new Date(),
      };
      setHistory(prev => [newResult, ...prev].slice(0, 50)); // Keep last 50 rolls

      // Update stats
      setStats(prev => ({
        total: prev.total + 1,
        SSR: prev.SSR + (item.rarity === 'SSR' ? 1 : 0),
        SR: prev.SR + (item.rarity === 'SR' ? 1 : 0),
        R: prev.R + (item.rarity === 'R' ? 1 : 0),
        N: prev.N + (item.rarity === 'N' ? 1 : 0),
      }));

      setIsRolling(false);
      setShowResult(true);
    }, 1500);
  };

  const handleCloseResult = () => {
    setShowResult(false);
    setCurrentItem(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 mb-4 animate-pulse">
            🎃 Halloween Gacha 🎃
          </h1>
          <p className="text-xl text-gray-300">
            Try your luck and collect spooky Halloween items!
          </p>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{stats.total}</div>
                <div className="text-sm text-gray-400">Total Rolls</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">{stats.SSR}</div>
                <div className="text-sm text-yellow-400">SSR</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">{stats.SR}</div>
                <div className="text-sm text-purple-400">SR</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">{stats.R}</div>
                <div className="text-sm text-blue-400">R</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-300">{stats.N}</div>
                <div className="text-sm text-gray-400">N</div>
              </div>
            </div>
          </div>
        </div>

        {/* Gacha Button */}
        <div className="flex justify-center mb-12">
          <GachaButton
            onClick={handleRoll}
            disabled={isRolling}
            isRolling={isRolling}
          />
        </div>

        {/* History */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Roll History
            </h2>
            <GachaHistory history={history} />
          </div>
        </div>

        {/* Drop Rates Info */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Drop Rates
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-yellow-300">SSR</div>
                <div className="text-sm text-gray-400">1%</div>
              </div>
              <div>
                <div className="text-xl font-bold text-purple-300">SR</div>
                <div className="text-sm text-gray-400">5%</div>
              </div>
              <div>
                <div className="text-xl font-bold text-blue-300">R</div>
                <div className="text-sm text-gray-400">14%</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-300">N</div>
                <div className="text-sm text-gray-400">80%</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Result Modal */}
      <GachaResultModal
        item={currentItem}
        show={showResult}
        onClose={handleCloseResult}
      />
    </div>
  );
}

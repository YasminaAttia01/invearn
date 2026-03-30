import { useEffect, useState } from "react";
import { Activity } from "lucide-react";

export function PerformanceMonitor() {
  const [fps, setFps] = useState(60);
  const [showMonitor, setShowMonitor] = useState(false);

  useEffect(() => {
    let lastTime = performance.now();
    let frames = 0;
    let animationFrameId: number;

    const measureFPS = () => {
      frames++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        setFps(Math.round((frames * 1000) / (currentTime - lastTime)));
        frames = 0;
        lastTime = currentTime;
      }

      animationFrameId = requestAnimationFrame(measureFPS);
    };

    measureFPS();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="fixed top-20 right-4 z-40">
      {showMonitor ? (
        <div className="bg-gradient-to-br from-[#0a0e27]/95 to-[#1e3a8a]/95 backdrop-blur-md rounded-xl p-4 border border-[#00d4ff]/30 shadow-2xl shadow-[#00d4ff]/20 min-w-[140px] animate-fade-in">
          <div className="flex items-center gap-2 mb-3">
            <Activity size={16} className="text-[#00d4ff]" />
            <h3 className="text-sm font-bold text-[#00d4ff]">Performance</h3>
          </div>
          
          <div className="space-y-2">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-400">FPS</span>
                <span className={`text-sm font-mono ${fps >= 55 ? 'text-green-400' : fps >= 30 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {fps}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full transition-all ${fps >= 55 ? 'bg-green-400' : fps >= 30 ? 'bg-yellow-400' : 'bg-red-400'}`}
                  style={{ width: `${Math.min((fps / 60) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowMonitor(false)}
            className="mt-3 text-xs text-gray-400 hover:text-[#00d4ff] transition-colors"
          >
            Hide
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowMonitor(true)}
          className="px-3 py-1.5 bg-gradient-to-br from-[#00d4ff] to-[#0ea5e9] rounded-lg shadow-lg shadow-[#00d4ff]/30 flex items-center gap-2 text-white text-sm hover:shadow-[#00d4ff]/50 hover:scale-105 active:scale-95 transition-all"
        >
          <Activity size={14} />
          <span>{fps} FPS</span>
        </button>
      )}
    </div>
  );
}

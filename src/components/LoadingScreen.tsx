import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExiting(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-[#0a0e27] to-[#1e3a8a] flex items-center justify-center transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#0ea5e9] to-[#00d4ff] bg-clip-text text-transparent mb-4">
            INVEARN
          </h1>
          
          <p className="text-gray-400 mb-8">Initializing Canvas Experience</p>
          
          <div className="w-64 mx-auto">
            <div className="bg-gray-800/50 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] transition-all duration-200"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            
            <p className="text-[#00d4ff] text-sm mt-3 font-mono">
              {Math.round(Math.min(progress, 100))}%
            </p>
          </div>

          <div className="mt-12 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

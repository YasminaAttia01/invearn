import { useState } from "react";
import { Settings, Sparkles, Cpu, Layers } from "lucide-react";

export function SceneControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    particles: true,
    blockchain: true,
    neuralNetwork: true,
    dataStreams: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    localStorage.setItem(`scene_${key}`, String(!settings[key]));
  };

  const controls = [
    { key: "particles" as const, label: "Particles", icon: Sparkles },
    { key: "blockchain" as const, label: "Geometric Shapes", icon: Cpu },
    { key: "neuralNetwork" as const, label: "Connection Lines", icon: Layers },
    { key: "dataStreams" as const, label: "Particle Glow", icon: Sparkles },
  ];

  return (
    <div className="fixed bottom-4 left-4 z-40">
      {isOpen && (
        <div className="mb-4 bg-gradient-to-br from-[#0a0e27]/95 to-[#1e3a8a]/95 backdrop-blur-md rounded-xl p-4 border border-[#00d4ff]/30 shadow-2xl shadow-[#00d4ff]/20 animate-fade-in">
          <h3 className="text-sm font-bold text-[#00d4ff] mb-3 flex items-center gap-2">
            <Settings size={16} />
            Scene Controls
          </h3>
          
          <div className="space-y-2">
            {controls.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => toggleSetting(key)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                  settings[key]
                    ? "bg-[#00d4ff]/20 text-[#00d4ff] border border-[#00d4ff]/30"
                    : "bg-gray-800/50 text-gray-400 border border-gray-700/30"
                }`}
              >
                <Icon size={16} />
                <span className="text-sm flex-1 text-left">{label}</span>
                <div
                  className={`w-10 h-5 rounded-full transition-colors ${
                    settings[key] ? "bg-[#00d4ff]" : "bg-gray-600"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full mt-0.5 transition-transform duration-300 ${
                      settings[key] ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-[#00d4ff]/20">
            <p className="text-xs text-gray-400">
              💡 Tip: Move your mouse to interact with particles
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-gradient-to-br from-[#00d4ff] to-[#0ea5e9] rounded-full shadow-lg shadow-[#00d4ff]/30 flex items-center justify-center text-white hover:shadow-[#00d4ff]/50 hover:scale-105 active:scale-95 transition-all"
      >
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <Settings size={20} />
        </div>
      </button>
    </div>
  );
}

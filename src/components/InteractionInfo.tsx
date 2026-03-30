import { Info, X } from "lucide-react";
import { useState } from "react";

export function InteractionInfo() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 left-4 z-30 max-w-xs animate-fade-in">
      <div className="bg-gradient-to-br from-[#0a0e27]/95 to-[#1e3a8a]/95 backdrop-blur-md rounded-xl p-4 border border-[#00d4ff]/30 shadow-2xl shadow-[#00d4ff]/20">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <Info size={16} className="text-[#00d4ff]" />
            <h3 className="text-sm font-bold text-[#00d4ff]">Interactive Mode</h3>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        
        <div className="space-y-2 text-xs text-gray-300">
          <p>🖱️ <strong>Move your mouse</strong> to interact with 2000+ particles</p>
          <p>🌊 <strong>Mouse repulsion</strong> pushes particles away</p>
          <p>✨ <strong>Canvas animations</strong> with geometric shapes</p>
        </div>
      </div>
    </div>
  );
}

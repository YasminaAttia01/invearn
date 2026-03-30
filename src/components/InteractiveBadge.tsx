import { Sparkles, Mouse } from "lucide-react";

export function InteractiveBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00d4ff]/10 to-[#0ea5e9]/10 border border-[#00d4ff]/30 rounded-full backdrop-blur-sm mb-6 animate-fade-in">
      <div className="animate-spin-slow">
        <Sparkles size={16} className="text-[#00d4ff]" />
      </div>
      <span className="text-sm text-[#00d4ff] font-medium">
        Interactive Canvas • Move your mouse to explore
      </span>
      <div className="animate-bounce-subtle">
        <Mouse size={14} className="text-[#00d4ff]" />
      </div>
    </div>
  );
}

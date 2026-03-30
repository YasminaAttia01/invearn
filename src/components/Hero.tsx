import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { InteractiveBadge } from "./InteractiveBadge";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <InteractiveBadge />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-white mb-2">Welcome to</span>
            <span className="block bg-gradient-to-r from-[#00d4ff] via-[#0ea5e9] to-[#00d4ff] bg-clip-text text-transparent">
              INVEARN
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Leading Innovation in Blockchain, AI, DevOps & Cloud Solutions
        </motion.p>

        <motion.p
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Export company with extensive experience working with international
          partners in the cryptocurrency and technology sectors
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            onClick={() => onNavigate("services")}
            className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white rounded-lg shadow-lg shadow-[#00d4ff]/20 hover:shadow-[#00d4ff]/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Services
          </motion.button>
          <motion.button
            onClick={() => onNavigate("contact")}
            className="px-8 py-4 bg-transparent border-2 border-[#00d4ff] text-[#00d4ff] rounded-lg hover:bg-[#00d4ff]/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.button
            onClick={() => onNavigate("about")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#00d4ff] hover:text-[#0ea5e9] transition-colors"
          >
            <ChevronDown size={40} />
          </motion.button>
        </motion.div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
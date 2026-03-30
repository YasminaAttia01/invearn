import { motion } from "motion/react";
import { Globe, Award, Users, TrendingUp } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: Globe,
      value: "Global",
      label: "International Reach",
      description: "Working with partners worldwide",
    },
    {
      icon: Award,
      value: "Expert",
      label: "Industry Leaders",
      description: "Proven track record in crypto",
    },
    {
      icon: Users,
      value: "Trusted",
      label: "Foreign Partners",
      description: "Strong international relationships",
    },
    {
      icon: TrendingUp,
      value: "Growing",
      label: "Export Company",
      description: "Expanding globally",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] bg-clip-text text-transparent">
              About INVEARN
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your trusted partner in cutting-edge technology solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-8 rounded-2xl border border-[#00d4ff]/20 shadow-xl">
              <h3 className="text-2xl mb-4 text-[#00d4ff]">Who We Are</h3>
              <p className="text-gray-300 leading-relaxed">
                INVEARN is a leading export company specializing in advanced
                technology solutions. With extensive experience in the
                cryptocurrency domain, we have established strong partnerships
                with foreign companies across the globe.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-8 rounded-2xl border border-[#00d4ff]/20 shadow-xl">
              <h3 className="text-2xl mb-4 text-[#00d4ff]">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                We strive to deliver innovative solutions in blockchain, AI,
                DevOps, and cloud technologies, helping businesses navigate the
                digital transformation landscape with confidence and expertise.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-8 rounded-2xl border border-[#00d4ff]/20 shadow-xl">
              <h3 className="text-2xl mb-4 text-[#00d4ff]">Our Expertise</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                With a proven track record in the cryptocurrency sector, we
                bring deep technical knowledge and industry insights to every
                project. Our team specializes in:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#00d4ff] mr-2">▹</span>
                  Blockchain development and integration
                </li>
                <li className="flex items-start">
                  <span className="text-[#00d4ff] mr-2">▹</span>
                  AI and machine learning solutions
                </li>
                <li className="flex items-start">
                  <span className="text-[#00d4ff] mr-2">▹</span>
                  DevOps automation and optimization
                </li>
                <li className="flex items-start">
                  <span className="text-[#00d4ff] mr-2">▹</span>
                  Cloud architecture and migration
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-8 rounded-2xl border border-[#00d4ff]/20 shadow-xl">
              <h3 className="text-2xl mb-4 text-[#00d4ff]">Global Presence</h3>
              <p className="text-gray-300 leading-relaxed">
                As an export-oriented company, we pride ourselves on our
                international collaborations and our ability to deliver
                world-class solutions to clients across different markets and
                industries.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-6 rounded-xl border border-[#00d4ff]/20 text-center shadow-lg hover:shadow-[#00d4ff]/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#00d4ff]/10 rounded-full">
                  <stat.icon className="w-8 h-8 text-[#00d4ff]" />
                </div>
              </div>
              <h4 className="text-2xl text-[#00d4ff] mb-2">{stat.value}</h4>
              <p className="text-white mb-2">{stat.label}</p>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#00d4ff]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#0ea5e9]/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}

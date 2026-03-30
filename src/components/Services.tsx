import { motion } from "motion/react";
import {
  Code,
  Network,
  Brain,
  Settings,
  Cloud,
  ArrowRight,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Development",
      description:
        "Full-stack development services with modern technologies and best practices",
      features: [
        "Web & Mobile Applications",
        "Custom Software Solutions",
        "API Development & Integration",
        "Frontend & Backend Systems",
      ],
      color: "from-[#00d4ff] to-[#0ea5e9]",
    },
    {
      icon: Network,
      title: "Blockchain",
      description:
        "Cutting-edge blockchain solutions for the cryptocurrency industry",
      features: [
        "Smart Contract Development",
        "DeFi Platform Creation",
        "NFT Marketplace Solutions",
        "Cryptocurrency Integration",
      ],
      color: "from-[#0ea5e9] to-[#00d4ff]",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description:
        "Intelligent systems powered by machine learning and advanced AI",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
      ],
      color: "from-[#00d4ff] to-[#1e3a8a]",
    },
    {
      icon: Settings,
      title: "DevOps",
      description:
        "Streamlined operations with automation and continuous delivery",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure Automation",
        "Monitoring & Optimization",
        "Container Orchestration",
      ],
      color: "from-[#1e3a8a] to-[#0ea5e9]",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services",
      features: [
        "Cloud Architecture Design",
        "Migration & Deployment",
        "Multi-Cloud Management",
        "Cloud Security & Compliance",
      ],
      color: "from-[#0ea5e9] to-[#00d4ff]",
    },
  ];

  return (
    <section id="services" className="min-h-screen py-20 px-4 relative">
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
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-8 rounded-2xl border border-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#00d4ff]/20"
            >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10`}
                >
                  <service.icon className="w-8 h-8 text-[#00d4ff]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl mb-3 text-white group-hover:text-[#00d4ff] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
                    className="flex items-start text-gray-300"
                  >
                    <span className="text-[#00d4ff] mr-2 mt-1">▹</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Learn More Button */}
              <motion.div
                className="flex items-center text-[#00d4ff] group-hover:text-[#0ea5e9] transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <span className="mr-2">Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>

              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#1a1f3a] to-[#0a0e27] p-12 rounded-2xl border border-[#00d4ff]/30">
            <h3 className="text-3xl mb-4 text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your goals in
              blockchain, AI, and cloud technologies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white rounded-lg shadow-lg shadow-[#00d4ff]/30 hover:shadow-[#00d4ff]/50 transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}

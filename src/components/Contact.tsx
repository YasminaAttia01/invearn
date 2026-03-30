import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@invearn.com",
      link: "mailto:contact@invearn.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Global Operations",
      link: null,
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative">
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
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your next project? Contact us today
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-8 rounded-2xl border border-[#00d4ff]/20 shadow-xl">
              <h3 className="text-2xl mb-6 text-[#00d4ff]">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1e3a8a]/20 border-[#00d4ff]/30 text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-[#00d4ff]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1e3a8a]/20 border-[#00d4ff]/30 text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-[#00d4ff]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-white mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-[#1e3a8a]/20 border-[#00d4ff]/30 text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-[#00d4ff]"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-[#1e3a8a]/20 border-[#00d4ff]/30 text-white placeholder:text-gray-500 focus:border-[#00d4ff] focus:ring-[#00d4ff] resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white hover:shadow-lg hover:shadow-[#00d4ff]/30 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-8 rounded-2xl border border-[#00d4ff]/20 shadow-xl">
              <h3 className="text-2xl mb-6 text-[#00d4ff]">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-[#00d4ff]/10 rounded-lg">
                      <info.icon className="w-6 h-6 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-400 hover:text-[#00d4ff] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-8 rounded-2xl border border-[#00d4ff]/20 shadow-xl">
              <h3 className="text-2xl mb-4 text-[#00d4ff]">Why Choose INVEARN?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#00d4ff] mr-2">✓</span>
                  Expert team with international experience
                </li>
                <li className="flex items-start">
                  <span className="text-[#00d4ff] mr-2">✓</span>
                  Proven track record in cryptocurrency
                </li>
                <li className="flex items-start">
                  <span className="text-[#00d4ff] mr-2">✓</span>
                  Cutting-edge technology solutions
                </li>
                <li className="flex items-start">
                  <span className="text-[#00d4ff] mr-2">✓</span>
                  Global partnerships and reach
                </li>
                <li className="flex items-start">
                  <span className="text-[#00d4ff] mr-2">✓</span>
                  24/7 support and consultation
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-8 rounded-2xl border border-[#00d4ff]/20 shadow-xl">
              <h3 className="text-2xl mb-4 text-[#00d4ff]">Business Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-[#00d4ff] mt-4">
                  Available globally across all time zones
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}

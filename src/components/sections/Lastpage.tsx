import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export function Lastpage() {
  return (
    <div className="bg-gray-900">
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
        <section
          id="home"
          className="min-h-screen bg-black relative overflow-hidden flex flex-col border-t-8 border-white"
        >
          {/* Grid Layout */}
          <div className="container mx-auto px-4 flex-grow flex flex-col justify-between py-12">
            {/* Top Section - Portfolio Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8 lg:mb-12"
            >
              <h1 className="text-white mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 tracking-tight">
                PORTFOLIO <span className="text-green-500">2025</span>
              </h1>
            </motion.div>

            {/* Middle Section - Thank You and Contact */}
            <div className="flex-grow flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mb-8 lg:mb-16"
              >
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Thank You!
                </h2>
                <p className="text-gray-400 text-xl md:text-2xl mb-10">
                  For exploring my architectural journey
                </p>

                {/* Contact Section */}
                <div className="space-y-6">
                  <h3 className="text-white text-2xl md:text-3xl font-medium">
                    Contact Me
                  </h3>

                  {/* Phone */}
                  <div className="flex items-center group">
                    <div className="p-3 mr-4 bg-green-500/20 rounded-full group-hover:bg-green-500/40 transition-all">
                      <FaPhone className="text-green-400 text-xl md:text-2xl" />
                    </div>
                    <div>
                      <a
                        href="tel:+251912345678"
                        className="text-white text-lg md:text-xl font-medium hover:text-green-400 transition-colors"
                      >
                        +251 919125927
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center group">
                    <div className="p-3 mr-4 bg-blue-500/20 rounded-full group-hover:bg-blue-500/40 transition-all">
                      <FaEnvelope className="text-blue-400 text-xl md:text-2xl" />
                    </div>
                    <div>
                      <a
                        href="mailto:eden616227@gmail.com"
                        className="text-white text-lg md:text-xl font-medium hover:text-blue-400 transition-colors"
                      >
                        eden61627@gmail.com{" "}
                      </a>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4 mt-8">
                    <a
                      href="#"
                      className="p-3 bg-gray-800/50 hover:bg-blue-600/50 rounded-full transition-all"
                    >
                      <FaLinkedin className="text-xl md:text-2xl" />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-gray-800/50 hover:bg-gray-600/50 rounded-full transition-all"
                    >
                      <FaGithub className="text-xl md:text-2xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Section - Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-auto"
            >
              <p className="text-gray-400 text-lg md:text-xl">
                Designed with passion by{" "}
                <span className="text-white font-medium">Eden Yilak</span>
              </p>
            </motion.div>
          </div>

          {/* Right Column - Image (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block absolute right-0 top-0 h-full w-1/3"
          >
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url("/ede123.jpg")',
                }}
              >
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </div>
          </motion.div>

          {/* Mobile Image (shown only on small screens) */}
          <div className="lg:hidden w-full h-64 relative mt-auto">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("/portfolio-hero.jpg")',
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

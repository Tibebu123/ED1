import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    // Set to fixed year 2025
    setCurrentYear(2025);
  }, []);

  return (
    <div className="bg-gray-900 overflow-x-hidden font-sans">
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
        <section
          id="home"
          className="min-h-screen bg-black relative overflow-hidden flex flex-col border-b-8 border-white"
        >
          {/* Grid Layout */}
          <div className="container mx-auto px-4 flex-grow flex flex-col justify-between py-8 md:py-12 relative z-10">
            {/* Top Section - Portfolio Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 sm:mb-8 lg:mb-12 flex flex-col items-center lg:items-start"
            >
              {/* Mobile Centered Version */}
              <h1 className="lg:hidden text-white mt-6 sm:mt-10 text-4xl sm:text-5xl font-bold mb-2 tracking-tight font-serif text-center">
                PORTFOLIO <span className="text-green-500">{currentYear}</span>
              </h1>

              {/* Desktop Left-Aligned Version */}
              <h1 className="hidden lg:block text-white mt-6 sm:mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 tracking-tight font-serif">
                PORTFOLIO <span className="text-green-500">{currentYear}</span>
              </h1>
            </motion.div>

            {/* Middle Section - Name and Profession - Mobile Card */}
            <div className="flex-grow flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mb-8 sm:mb-12 lg:mb-16"
              >
                {/* Mobile Card Container (visible only on mobile) */}
                <div className="lg:hidden bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg w-full max-w-md mx-auto text-center">
                  <h2 className="text-white text-4xl font-bold tracking-tight mb-4 font-serif leading-tight">
                    ARCHITECTURE
                    <br />
                    PORTFOLIO
                  </h2>
                  <motion.p
                    className="text-gray-300 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    PRESENTED BY{" "}
                    <span className="text-white font-semibold">EDEN YILAK</span>
                  </motion.p>
                </div>

                {/* Desktop Version (hidden on mobile) */}
                <div className="hidden lg:block">
                  <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-1 font-serif leading-tight">
                    ARCHITECTURE
                    <br />
                    PORTFOLIO
                  </h2>
                  <motion.p
                    className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-2 mt-6 sm:mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    PRESENTED BY{" "}
                    <span className="text-white font-semibold">EDEN YILAK</span>
                  </motion.p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Section - Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-auto pb-8 sm:pb-12 flex justify-center lg:justify-start"
            >
              {/* Mobile Contact Card */}
              <div className="lg:hidden bg-black/60 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20 shadow-md text-center">
                <p className="text-gray-300 text-lg">
                  <span className="text-white font-semibold">
                    Eden616227@gmail.com
                  </span>
                </p>
              </div>

              {/* Desktop Contact Info */}
              <p className="hidden lg:block text-gray-300 text-lg sm:text-xl md:text-2xl">
                <span className="text-white font-semibold">
                  Eden616227@gmail.com
                </span>
              </p>
            </motion.div>
          </div>

          {/* Image Column - Visible on all devices */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute right-0 top-0 h-full w-full md:w-1/2 lg:w-1/3 z-0"
          >
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url("/ede123.jpg")',
                }}
              >
                <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
              </div>
            </div>
          </motion.div>

          {/* Responsive overlay gradient */}
          <div className="absolute inset-0 z-1 bg-gradient-to-r from-black via-black/70 to-transparent md:bg-gradient-to-r md:from-black md:via-black/50 md:to-transparent" />
        </section>
      </div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/hotel.jpg";
import residence2 from "../../assets/images/hotel2.jpg";
import residence3 from "../../assets/images/hotl3.jpg";
import residence4 from "../../assets/images/hotel5.png";

export function Hotel() {
  const bottomImages = [residence1, residence2, residence3, residence4];

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section
        id="services"
        className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
      >
        {/* Full width horizontal line at the top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Text at the top - stacked vertically */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white mb-16 mt-12"
          >
            <h2 className="text-7xl md:text-8xl lg:text-4xl font-bold tracking-tight">
              PORTFOLIO 2025
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 md:mt-12"
            >
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold italic tracking-wide">
                HOTEL DESIGN
              </h2>
            </motion.div>
          </motion.div>

          {/* Spacer to push images down */}
          <div className="flex-grow"></div>

          {/* Four larger images with enhanced lighting and increased width */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-28 md:mt-24" // Increased gap to 8
          >
            {bottomImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                // whileHover={{ scale: 1.03 }}
                className="relative h-80 md:h-[28rem] w-full group bg-black"
              >
                <img
                  src={img}
                  alt={`Hotel Design ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg brightness-90 hover:brightness-110 transition-all duration-500" // Added brightness control
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 rounded-lg group-hover:bg-black/5 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  0{index + 1}
                </div>
                {/* Subtle lighting effect */}
                <div className="absolute inset-0 rounded-lg pointer-events-none mix-blend-overlay bg-gradient-to-br from-transparent via-transparent to-white/5"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Email at the bottom with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-16 pt-8 text-left border-t border-white/20"
          >
            <a
              href="mailto:eden616227@gmail.com"
              className="text-3xl md:text-4xl lg:text-5xl text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center"
            >
              <span className="mr-4">✉</span>
              <span className="border-b border-transparent hover:border-white/50 pb-1">
                eden616227@gmail.com
              </span>
            </a>
            <p className="text-white/60 mt-4 text-lg md:text-xl">
              LOCATION:HOSSANA,ETHIOPIA{" "}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

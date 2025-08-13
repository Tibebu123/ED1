import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/3resdence.png";
import residence2 from "../../assets/images/3resdenced.png";

export function D13view() {
  return (
    <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 overflow-x-hidden bg-gray-900">
      <section className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white">
        {/* Full width horizontal line at the top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start flex-grow">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent"
              >
                Portfolio 2025{" "}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl leading-relaxed mb-6"
              >
                3D View
              </motion.p>
            </motion.div>

            {/* Right Column - Two Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-8 h-full"
            >
              {/* Top Right Image */}
              <motion.div
                className="relative h-[40vh] w-full group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={residence1}
                  alt="Hydraulic Furniture Top View"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>

              {/* Bottom Right Image */}
              <motion.div
                className="relative h-[40vh] w-full group mt-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={residence2}
                  alt="Hydraulic Furniture Bottom View"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>
            </motion.div>
          </div>

          {/* Email at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-auto pt-16 text-left"
          >
            <a
              href="mailto:eden616227@gmail.com"
              className="text-xl md:text-2xl text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-block border-b-2 border-transparent hover:border-blue-400"
            >
              eden616227@gmail.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

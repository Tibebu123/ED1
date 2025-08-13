import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/intrror1.png";
import residence2 from "../../assets/images/interor2.jpg";
import residence3 from "../../assets/images/interor3.png";

export function Interor3d() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section
        id="services"
        className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
      >
        {/* Full width horizontal line at the top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow">
            {/* Left column */}
            <div className="flex flex-col">
              {/* Title at top left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
                  Interior & 3D View
                </h2>
              </motion.div>

              {/* Single image at bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-auto"
              >
                <div className="relative h-64 md:h-96 w-full group">
                  <img
                    src={residence1}
                    alt="Cinema Interior"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </motion.div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-8">
              {/* Top right image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="h-64 md:h-80 w-full"
              >
                <div className="relative h-full w-full group">
                  <img
                    src={residence2}
                    alt="Cinema Section View"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </motion.div>

              {/* Bottom right image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-64 md:h-80 w-full"
              >
                <div className="relative h-full w-full group">
                  <img
                    src={residence3}
                    alt="Cinema Elevation View"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Text content at the bottom */}
        </div>
      </section>
    </div>
  );
}

export default Interor3d;

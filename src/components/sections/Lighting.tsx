import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/lignth1.png";
import residence2 from "../../assets/images/BACK.jpg";

export function Lighting() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section
        id="living-room"
        className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
      >
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-grow">
            {/* Left column */}
            <div className="flex flex-col">
              {/* Single image at top left - Increased size */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 w-full"
              >
                <div className="relative h-[500px] md:h-[600px] w-full group overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={residence1}
                    alt="Living Room Overview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </motion.div>

              {/* Text content below image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Living Room Features
                </h3>
                <div className="text-gray-300 text-lg space-y-4">
                  <p>
                    The living room has an L-shaped sofa, a TV stand to give it
                    more space and ambiance, and a bookshelf. I used the colors
                    to make it more luxurious and brighter. Used in TV screen
                    view angle 40°.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right column - finishing materials */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-gray-800/50 p-6 md:p-8 rounded-xl border border-gray-700">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  FINISHING MATERIALS
                </h3>
                <h4 className="text-xl font-bold text-white mb-4">
                  Living room and Dining room
                </h4>

                <div className="text-gray-300 text-lg md:text-xl space-y-6">
                  <div>
                    <h5 className="font-semibold text-white mb-2">
                      Wall material:
                    </h5>
                    <p>
                      Gypsum with white color and light gray, creating a clean
                      and airy feel.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-white mb-2">
                      Floor material:
                    </h5>
                    <p>
                      Ceramic tile, 30×30cm to create visual spaciousness and
                      warmth while maintaining a sleek look.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-white mb-2">
                      Ceiling material:
                    </h5>
                    <p>Gypsum board for a smooth, modern finish.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Location at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-auto pt-12 text-center"
          >
            <p className="text-2xl md:text-3xl text-gray-400">
              LOCATION: HOSSANA, ETHIOPIA
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Lighting;

import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/intrrordesign.png";
import residence2 from "../../assets/images/BACK.jpg";
import residence3 from "../../assets/images/FRO.jpg";

export function BedroomDesign() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section
        id="bedroom"
        className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
      >
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-grow">
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
                  INTERIOR DESIGN
                </h2>
              </motion.div>

              {/* Text content below title */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8"
              >
                <div className="text-gray-300 text-lg md:text-xl space-y-4">
                  <p>
                    The bedroom also has a bed in the center, but I designed the
                    wall and ceiling together to make the bed look bigger. The
                    windows on the sides are 1m high. Below it, we see a wall
                    made of wood that also serves as a charger socket. The color
                    code is designed to avoid clashing with each other and to
                    create a bright and luxurious bedroom design.
                  </p>
                </div>
              </motion.div>

              {/* Image at left bottom */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-auto"
              >
                <div className="relative h-64 md:h-96 w-full group overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={residence1}
                    alt="Bedroom Design"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </motion.div>
            </div>

            {/* Right column */}
            <div className="flex flex-col">
              {/* Title at top right with added top margin */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8 mt-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
                  BEDROOM DESIGN
                </h2>
              </motion.div>

              {/* Bottom right text - positioned at bottom with margin */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-auto bg-gray-800/50 p-6 md:p-8 rounded-xl border border-gray-700"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  TASK LIGHTING
                </h3>
                <div className="text-gray-300 text-lg md:text-xl space-y-4">
                  <p>
                    It is used to add visibility to a small area, with light
                    bright enough to illuminate small details, reduce strain on
                    the eyes, and avoid distracting shadows. Kitchen task
                    lighting is designed to create a shadow-free work
                    environment when you're doing things around the kitchen,
                    like cooking at the hob or chopping at a work surface.
                  </p>
                </div>
              </motion.div>
            </div>
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

export default BedroomDesign;

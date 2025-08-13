import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/livingroom1.png";
import residence2 from "../../assets/images/livingroom2.png";
import residence3 from "../../assets/images/UUU.jpg";
import residence4 from "../../assets/images/WEST.jpg";

export function LivingRoomDesign() {
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
              {/* Title at top left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 mb-2">
                  INTERIOR DESIGN
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  LIVING ROOM DESIGN
                </h3>
              </motion.div>

              {/* Single large image below title */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <div className="relative h-64 md:h-96 w-full group overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={residence1}
                    alt="Living Room Overview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </motion.div>

              {/* Two images in row below */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="relative h-48 md:h-64 w-full group overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={residence2}
                    alt="Living Room Detail 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="relative h-48 md:h-64 w-full group overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={residence3}
                    alt="Living Room Detail 2"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </motion.div>
            </div>

            {/* Right column - text content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-gray-800/50 p-6 md:p-8 rounded-xl border border-gray-700">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Modern Living Room Features
                </h3>
                <div className="text-gray-300 text-lg md:text-xl space-y-6">
                  <div>
                    <h4 className="font-bold text-white text-xl mb-2">
                      Simplicity and Clean Lines
                    </h4>
                    <p>
                      Modern design emphasizes minimalism with a focus on
                      geometric forms and decluttered spaces. Furniture and
                      decor tend to have smooth, clean lines without intricate
                      detailing.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-xl mb-2">
                      Neutral Color Palettes
                    </h4>
                    <p>
                      Modern interiors often use neutral colors like whites,
                      grays, and beiges, creating a calm and serene environment.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-xl mb-2">
                      Functional Furniture
                    </h4>
                    <p>
                      The furniture in modern design is typically functional and
                      practical. Pieces are chosen with an emphasis on usability
                      and comfort rather than ornate decoration.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-xl mb-2">
                      Natural Materials
                    </h4>
                    <p>
                      There is a strong emphasis on natural materials such as
                      wood, stone, and metal, which help create a connection to
                      nature.
                    </p>
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

export default LivingRoomDesign;

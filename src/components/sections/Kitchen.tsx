import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/tri.png";
import residence2 from "../../assets/images/trii.png";
import residence3 from "../../assets/images/FRO.jpg";

export function Kitchen() {
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
            {/* Left column - text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 mb-4">
                  INTERIOR DESIGN
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  KITCHEN DESIGN
                </h3>

                <div className="text-gray-300 text-lg md:text-xl space-y-4">
                  <p>
                    <span className="font-semibold text-white">
                      Modern kitchen design style
                    </span>{" "}
                    Modern kitchen design is characterised by sleek, clean
                    lines, simple materials and straightforward geometric forms.
                    Modern kitchens have a neutral colour palette and a
                    minimalist, pared-back approach with little pattern or
                    ornamentation, with the main focus on simplicity and
                    functionality, as well as sustainability.
                  </p>

                  <p>
                    <span className="font-semibold text-white">
                      U or C shape kitchen
                    </span>{" "}
                    The U shape kitchen prevents kitchen working traffic and is
                    ideal in this respect. This practical kitchen also provides
                    three walls of storage and a huge counter space.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right column - images */}
            <div className="flex flex-col gap-8">
              {/* Two images in row at top right */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="relative h-48 md:h-64 w-full group">
                  <img
                    src={residence1}
                    alt="Modern Kitchen Design"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="relative h-48 md:h-64 w-full group">
                  <img
                    src={residence2}
                    alt="U-Shaped Kitchen"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </motion.div>

              {/* Text content at bottom right */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
              >
                <div className="text-gray-300 text-lg md:text-xl space-y-4">
                  <div>
                    <h4 className="font-bold text-white text-xl mb-2">
                      STORAGE ZONE
                    </h4>
                    <p>
                      This zone mainly includes all the food storage, the
                      kitchen pantry cabinet and the fridge.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-xl mb-2">
                      COOKING ZONE
                    </h4>
                    <p>
                      The most important zone in the kitchen is the cooking
                      zone. Appliances such as oven, hobs, microwave and
                      chimneys can be placed here.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-xl mb-2">
                      CLEANING ZONE
                    </h4>
                    <p>
                      The cleaning zone includes the sink and under sink unit.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-xl mb-2">
                      DINING ZONE
                    </h4>
                    <p>The area designated for dining and casual meals.</p>
                  </div>
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

export default Kitchen;

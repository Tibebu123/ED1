import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/swi1.png";
import residence2 from "../../assets/images/swit.png";

export function Switchsoket() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section
        id="services"
        className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
      >
        {/* Full width horizontal line at the top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Two images at the top */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 h-96/home/te/Desktop/porti/hhj/int. kitchen/kitch_2 - Photo (3).jpg">
            {/* Left image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-64 md:h-96 w-full group"
            >
              <img
                src={residence1}
                alt="Kitchen Design Left"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/30 rounded-xl group-hover:bg-black/10 transition-colors duration-300"></div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 md:h-96 w-full group"
            >
              <img
                src={residence2}
                alt="Kitchen Design Right"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/30 rounded-xl group-hover:bg-black/10 transition-colors duration-300"></div>
            </motion.div>
          </div>

          {/* Main content */}
          <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - empty for balance */}
            <div></div>

            {/* Right column - empty for balance */}
            <div></div>
          </div>

          {/* Finishing materials text at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-auto bg-gray-800/50 p-6 md:p-8 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              FINISHING MATERIAL
            </h3>

            <div className="text-gray-300 text-lg md:text-xl space-y-6">
              <div>
                <h4 className="font-bold text-white text-xl mb-2">
                  FLOOR MATERIAL: CERAMIC TILES
                </h4>
                <p>
                  While not being the hardest flooring available, ceramic tiles
                  are very durable. They provide excellent protection against
                  water and moisture, making them ideal for kitchen
                  environments.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white text-xl mb-2">
                  SHELF MATERIAL: LAMINATE
                </h4>
                <p>
                  A kitchen cupboard with laminate finish is moisture-resistant.
                  This finish is not only easy on the pocket but also
                  moisture-resistant, making it the perfect match for a kitchen.
                  Laminate surfaces are easy to clean and maintain.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white text-xl mb-2">
                  WALL MATERIAL: LAMINATE TILE
                </h4>
                <p>
                  Laminate cabinets are known for their durability. They provide
                  excellent protection against water, moisture, and abrasions.
                  The smooth surface resists stains and is simple to wipe clean.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 pt-8 text-center"
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

export default Switchsoket;

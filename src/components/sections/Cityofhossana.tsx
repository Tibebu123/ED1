import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/moll building1.jpg";
import residence2 from "../../assets/images/BACK.jpg";
import residence3 from "../../assets/images/FRO.jpg";
import residence4 from "../../assets/images/WEST.jpg";
import residence5 from "../../assets/images/EST.jpg";

export function Cityofhossahna() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section
        id="services"
        className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
      >
        {/* Full width horizontal line at the top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Title at the top */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white mb-16 text-center"
          ></motion.div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start flex-grow">
            {/* Left column - single image with description */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-96 w-full group bg-black"
                // whileHover={{ scale: 1.02 }}
              >
                <img
                  src={residence1}
                  alt="Market Overview"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-16 text-gray-300  text-3xl"
              >
                <p>
                  It is an open market located in the city of Hosanna. The
                  market provides many services and is a place where religious
                  programs are held, some people do sports, and generally
                  various services are held. These problems, such as lack of
                  separation of programs and an abundance of garbage, are the
                  least of them. Therefore, despite the existence of an open
                  market, I have tried to fix the closed shops that need to be
                  placed in the mall and the rest where they are.
                </p>
              </motion.div>
            </div>

            {/* Right column - 4 images */}
            <div className="flex flex-col gap-8">
              {/* Top image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative h-64 w-full group bg-black"
                // whileHover={{ scale: 1.02 }}
              >
                <img
                  src={residence2}
                  alt="Market Section 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>

              {/* Second image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-64 w-full group bg-black"
                // whileHover={{ scale: 1.02 }}
              >
                <img
                  src={residence3}
                  alt="Market Section 2"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>

              {/* Bottom two images in row */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative h-48 w-full group bg-black"
                  //   whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={residence4}
                    alt="Market Detail 1"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative h-48 w-full group bg-black"
                  //   whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={residence5}
                    alt="Market Detail 2"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Location at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-auto pt-16 text-center"
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

export default Cityofhossahna;

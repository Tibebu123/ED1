import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/Vegtable.png";
import residence2 from "../../assets/images/vegtable1.png";

export function Vegetable() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section
        id="services"
        className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-green-900/20 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-blue-900/20 blur-3xl"></div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Title with animation */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          ></motion.div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start flex-grow">
            {/* Left column */}
            <div className="flex flex-col space-y-12">
              {/* Top image with floating effect */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                // whileHover={{ y: -10 }}
                className="relative h-96 w-full group overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src={residence1}
                  alt="Market Shelter Design"
                  className="w-full h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6"></div>
              </motion.div>

              {/* Inspiration text with leaf icon */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 text-green-500 opacity-10 text-9xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-24 h-24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-300 text-xl md:text-2xl leading-relaxed">
                  What inspired me to create this shade design was a tree branch
                  or leaf. We often use trees as temporary shelter when we are
                  tired or at other times. Therefore, since businessmen here
                  need shelter for their daily work, the leaf of the tree became
                  the reason for me to create this form or shade.
                </p>
              </motion.div>
            </div>

            {/* Right column */}
            <div className="flex flex-col space-y-12">
              {/* Empty space with decorative elements */}
              {/* <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-96 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 relative overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-1/2 h-1/2 text-gray-700" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M45,-65.3C57.3,-56.5,65.6,-41.4,70.5,-25.6C75.4,-9.8,76.9,6.8,71.3,21.4C65.7,36,53,48.6,37.4,57.9C21.8,67.2,3.3,73.2,-13.9,69.8C-31.1,66.4,-46.9,53.6,-57.3,37.9C-67.7,22.2,-72.6,3.6,-69.3,-14.1C-66,-31.8,-54.4,-48.6,-39.3,-56.8C-24.1,-65,-5.3,-64.6,11.6,-59.5C28.5,-54.4,56.9,-44.6,45,-65.3Z" transform="translate(100 100)" />
                  </svg>
                </div>
                <h3 className="relative z-10 text-3xl text-center text-gray-500 font-light">Design Process Visualization</h3>
              </motion.div> */}

              {/* Bottom image with parallax effect */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl mt-40"
              >
                <motion.img
                  src={residence2}
                  alt="Market Implementation"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6"></div>
              </motion.div>
            </div>
          </div>

          {/* Location with animated underline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-24 pt-8 text-center relative"
          >
            <motion.p
              className="text-3xl md:text-4xl font-medium text-gray-400 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              LOCATION: HOSSANA, ETHIOPIA
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Vegetable;

import React from "react";
import { motion } from "framer-motion";
import officeRender from "../../assets/images/officerender.jpg";

export function OfficeRender2() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      {" "}
      {/* Increased width margins */}
      <section
        id="office"
        className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
      >
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Main title at top center */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              OFFICE RENDER
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
             
            </p>
          </motion.div>

          {/* Centered image with floating effect - made larger */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full max-w-6xl mx-auto my-12 rounded-3xl overflow-hidden shadow-2xl flex-grow"
          >
            <img
              src={officeRender}
              alt="Modern Office Render"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <div className="text-white">
                <p className="text-gray-300">
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-auto pt-12 text-center"
          >
            <p className="text-xl md:text-2xl text-gray-400">
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default OfficeRender2;

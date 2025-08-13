import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/bed1.jpg";
import residence2 from "../../assets/images/bed2.jpg";

export function Reder2() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section
        id="services"
        className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
      >
        {/* Full width horizontal line at the top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* 3D View Title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {" "}
            {/* Reduced margin-bottom */}
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
              RENDER{" "}
            </h2>
          </motion.div>

          {/* Main content grid - two columns with reduced height images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left image - reduced height */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center w-full"
            >
              <div className="relative h-[450px] w-full group">
                {" "}
                {/* Reduced from 600px */}
                <img
                  src={residence1}
                  alt="Market 3D View Left"
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-black/30 rounded-xl group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
            </motion.div>

            {/* Right image - reduced height */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center w-full"
            >
              <div className="relative h-[450px] w-full group">
                {" "}
                {/* Reduced from 600px */}
                <img
                  src={residence2}
                  alt="Market 3D View Right"
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-black/30 rounded-xl group-hover:bg-black/10 transition-colors duration-300"></div>
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
            {" "}
            {/* Reduced padding-top */}
            <p className="text-3xl md:text-4xl text-gray-400">
              LOCATION: HOSSANA, ETHIOPIA
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Reder2;

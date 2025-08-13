import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/reder11.jpg";
import residence2 from "../../assets/images/rederdoo.jpg";
import residence3 from "../../assets/images/reder2.png";
import residence4 from "../../assets/images/reder3.jpg";
import residence5 from "../../assets/images/reder1.jpg";

export function Render() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section
        id="gallery"
        className="relative min-h-screen w-full bg-black py-16"
      >
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Render Title - Added at the very top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
              RENDER
            </h1>
          </motion.div>

          {/* Top images row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
          >
            {/* Top left image */}
            <div className="relative h-64 md:h-96 w-full group overflow-hidden rounded-2xl">
              <motion.img
                src={residence1}
                alt="Design 1"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Top right image */}
            <div className="relative h-64 md:h-96 w-full group overflow-hidden rounded-2xl">
              <motion.img
                src={residence2}
                alt="Design 2"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Bottom images row - 3 images */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-auto"
          >
            {/* Bottom image 1 */}
            <div className="relative h-64 w-full group overflow-hidden rounded-2xl">
              <motion.img
                src={residence3}
                alt="Design 3"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Bottom image 2 */}
            <div className="relative h-64 w-full group overflow-hidden rounded-2xl">
              <motion.img
                src={residence4}
                alt="Design 4"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Bottom image 3 */}
            <div className="relative h-64 w-full group overflow-hidden rounded-2xl">
              <motion.img
                src={residence5}
                alt="Design 5"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Render;

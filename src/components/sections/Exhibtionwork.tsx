import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/exhi1.jpg";
import residence2 from "../../assets/images/exhi3.jpg";
import residence3 from "../../assets/images/exhi2.jpg";
import residence4 from "../../assets/images/exhi4.jpg";

export function Exhibtionwork() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section
        id="services"
        className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
      >
        {/* Full width horizontal line at the top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 h-full">
          {/* Exhibition Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left mb-8 md:mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 mb-4">
              EXHIBITION WORKS
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
              These are some of the works I presented during the exhibition.
              Each piece represents a unique perspective on modern architectural
              design, blending functionality with aesthetic innovation.
            </p>
          </motion.div>

          {/* 3D View Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-8 md:mb-12"
          ></motion.div>

          {/* Main content grid - modern layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {/* Left column - full height image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 h-full"
            >
              <div className="relative h-full w-full group rounded-xl overflow-hidden">
                <img
                  src={residence1}
                  alt="Exhibition Work Main Display"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  {/* <p className="text-white text-lg font-medium">Featured Exhibition Piece</p> */}
                </div>
              </div>
            </motion.div>

            {/* Right column - adjusted grid layout */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {/* Empty space on left side of top row */}
              <div className="hidden md:block h-64 md:h-80"></div>

              {/* Top right image - now positioned far right */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-64 md:h-80"
              >
                <div className="relative h-full w-full group rounded-xl overflow-hidden">
                  <img
                    src={residence2}
                    alt="Exhibition Work Detail View"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    {/* <p className="text-white text-lg font-medium">Structural Detail</p> */}
                  </div>
                </div>
              </motion.div>

              {/* Bottom left image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-64 md:h-full"
              >
                <div className="relative h-full w-full group rounded-xl overflow-hidden">
                  <img
                    src={residence3}
                    alt="Exhibition Work Entrance View"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    {/* <p className="text-white text-lg font-medium">Entrance Perspective</p> */}
                  </div>
                </div>
              </motion.div>

              {/* Bottom right image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="h-64 md:h-full"
              >
                <div className="relative h-full w-full group rounded-xl overflow-hidden">
                  <img
                    src={residence4}
                    alt="Exhibition Work Backyard View"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    {/* <p className="text-white text-lg font-medium">Backyard Design</p> */}
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
            className="mt-12 text-center"
          >
            <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wider">
              LOCATION:{" "}
              <span className="font-medium text-white">HOSSANA, ETHIOPIA</span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Exhibtionwork;

import React from "react";
import { motion } from "framer-motion";
// import image1 from "../../assets/images/eden5.jpg";
// import image2 from "../../assets/images/eden52.png";
// import image3 from "../../assets/images/eden5.jpg";
// import image4 from "../../assets/images/eden52.png";
import image5 from "../../assets/images/6yr.jpg";
import image6 from "../../assets/images/7yr.jpg";

export function D32view() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white">
        {/* Full width horizontal line at the top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow">
            {/* Left Column - 4 images */}
            <div className="flex flex-col h-full">
              {/* 3D VIEW title above left top image */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent"
              >
                PORTFOLIO - 2025
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-7xl md:text-6xl font-bold mt-40 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent"
              >
                3D VIEW
              </motion.h1>

              {/* Top left single image with top margin */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[40vh] w-full group mt-36 mb-8" // Added mt-8 for top margin
                whileHover={{ scale: 1.02 }}
              >
                {/* <img
                  src={image1}
                  alt="Design Top View"
                  className="w-full h-full object-cover rounded-lg"
                /> */}
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>

              {/* Bottom left 3 images in row */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-3 gap-4 mt-auto"
              >
                {/* {[image2, image3, image4].map((img, index) => (
                  <motion.div
                    key={index}
                    className="relative h-[30vh] w-full group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={img}
                      alt={`Design Detail ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                  </motion.div>
                ))} */}
              </motion.div>
            </div>

            {/* Right Column - 2 images */}
            <div className="flex flex-col h-full">
              {/* Top right image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative h-[50vh] w-full group mb-8"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image5}
                  alt="Design Right View"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>

              {/* Bottom right image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative h-[50vh] w-full group mt-auto"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image6}
                  alt="Design Bottom View"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>
            </div>
          </div>

          {/* Email at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-left"
          >
            <a
              href="mailto:eden616227@gmail.com"
              className="text-xl md:text-2xl text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-block border-b-2 border-transparent hover:border-blue-400"
            >
              eden616227@gmail.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

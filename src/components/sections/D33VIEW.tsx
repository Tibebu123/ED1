import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/fsw.jpg";
import residence2 from "../../assets/images/d37.png";
import residence3 from "../../assets/images/3D View 6.jpg";
import residence4 from "../../assets/images/3D View 7.jpg";
import residence5 from "../../assets/images/fcv.jpg";
import residence6 from "../../assets/images/ff.jpg";

export function D33VIEW() {
  const images = [
    residence1,
    residence2,
    residence3,
    residence4,
    residence5,
    residence6,
  ];

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section
        id="services"
        className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
      >
        {/* Full width horizontal line at the top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* 3D View title at top left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white "
          >
            <h1 className="text-7xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              3D VIEW
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start flex-grow">
            {/* Left Column - 4 images (1 below title + 3 below) */}
            <div className="lg:col-span-2 grid grid-cols-1 mt-24 ml-0 gap-8">
              {/* First image below title */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-full w-full group bg-black"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={images[0]}
                  alt="Architectural Work 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>

              {/* Three images below */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative h-64 w-full group bg-black"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={images[1]}
                    alt="Architectural Work 2"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative h-64 w-full group bg-black"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={images[2]}
                    alt="Architectural Work 3"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative h-64 w-full group bg-black"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={images[3]}
                    alt="Architectural Work 4"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>
              </div>
            </div>

            {/* Right Column - 2 images (top and bottom) - increased width */}
            <div className="flex flex-col gap-8 h-full lg:col-span-1">
              {" "}
              {/* Added lg:col-span-1 to ensure proper width */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative h-full w-full group bg-black"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={images[4]}
                  alt="Architectural Work 5"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative h-full w-full group bg-black"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={images[5]}
                  alt="Architectural Work 6"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>
            </div>
          </div>

          {/* Email at the bottom with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-auto pt-16 text-left"
          >
            <a
              href="mailto:eden616227@gmail.com"
              className="text-2xl md:text-3xl text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-block border-b-2 border-transparent hover:border-blue-400"
            >
              eden616227@gmail.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function d() {
  throw new Error("Function not implemented.");
}

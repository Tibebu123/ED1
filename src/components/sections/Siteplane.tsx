import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/sitplane1.png";
import residence2 from "../../assets/images/hotel2.jpg";
import residence3 from "../../assets/images/hotl3.jpg";
import residence4 from "../../assets/images/hotel5.png";

export function Siteplane() {
  const bottomImages = [residence1, residence2, residence3, residence4];

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section
        id="services"
        className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
      >
        {/* Full width horizontal line at the top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Main content row (left image + center content) */}
          <div className="flex flex-col lg:flex-row h-full">
            {/* Left column - single full-height image - increased width */}
            <div className="lg:w-2/5 flex">
              {" "}
              {/* Increased from lg:w-1/3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="relative h-full w-full group bg-black"
              >
                <img
                  src={bottomImages[0]}
                  alt="Hotel Design Left"
                  className="w-full h-full object-cover rounded-lg brightness-90 hover:brightness-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 rounded-lg group-hover:bg-black/5 transition-all duration-500"></div>
                <div className="absolute bottom-6 left-6 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  01
                </div>
              </motion.div>
            </div>

            {/* Center content column - reduced width */}
            <div className="lg:w-3/5 flex flex-col">
              {" "}
              {/* Adjusted from lg:w-2/3 */}
              {/* Centered content with images and text below */}
              <div className="flex flex-col items-center h-full justify-center">
                {/* ELEVATION & SECTION title above three images */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-white mb-8 text-center"
                >
                  <h2 className="text-5xl md:text-6xl font-bold italic">
                    ELEVATION & SECTION
                  </h2>
                </motion.div>

                {/* Three images in row - centered with increased width */}
                <div className="flex justify-center w-full mt-12 px-4">
                  {" "}
                  {/* Added padding */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {" "}
                    {/* Reduced gap */}
                    {[bottomImages[1], bottomImages[2], bottomImages[3]].map(
                      (img, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="relative h-72 md:h-96 w-full group bg-black"
                        >
                          <img
                            src={img}
                            alt={`Hotel Design Center ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg brightness-90 hover:brightness-110 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 rounded-lg group-hover:bg-black/5 transition-all duration-500"></div>
                          <div className="absolute bottom-6 left-6 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            0{index + 2}
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>

                {/* Text content below the three images */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-white/80 text-xl md:text-2xl leading-relaxed mt-12 w-full px-4"
                >
                  <p className="mb-8">
                    I have tried to work on structural system, mechanical
                    system, HVAC system, electrical system, envelope system,
                    sustainable, smart building system, finishing system,
                    technology system.
                  </p>
                  <p className="mb-8">
                    In general, the building is located on an area of 600 m²,
                    with 4 basements, ground-2nd floor customer service program,
                    3rd floor-6th floor bedrooms.
                  </p>
                  <p className="mb-8">
                    The facade design is to have a rhythm character and reduce
                    sunlight. The materials I have tried to use are wood, R.C.C
                    wall, shear wall etc.
                  </p>
                </motion.div>

                {/* Email at the bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="mt-12 pt-8 text-center border-t border-white/20 w-full px-4"
                >
                  <a
                    href="mailto:eden616227@gmail.com"
                    className="text-2xl md:text-3xl text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center"
                  >
                    <span className="mr-4">✉</span>
                    <span className="border-b border-transparent hover:border-white/50 pb-1">
                      eden616227@gmail.com
                    </span>
                  </a>
                  <p className="text-white/60 mt-4 text-lg">
                    LOCATION: HOSSANA, ETHIOPIA
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout - four images at the bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="lg:hidden grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 px-4"
        >
          {bottomImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="relative h-80 md:h-[30rem] w-full group bg-black"
            >
              <img
                src={img}
                alt={`Hotel Design ${index + 1}`}
                className="w-full h-full object-cover rounded-lg brightness-90 hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 rounded-lg group-hover:bg-black/5 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

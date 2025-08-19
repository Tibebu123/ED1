import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/sitplane1.png";
import residence2 from "../../assets/images/imagenew.png";
import residence3 from "../../assets/images/imagen4.png";
import residence4 from "../../assets/images/image3.png";

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
          <div className="flex flex-col lg:flex-row h-full gap-8">
            {/* Left column - full height image */}
            <div className="lg:w-2/5 flex">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="relative h-[80vh] w-full group bg-black"
              >
                <img
                  src={bottomImages[0]}
                  alt="Hotel Design Left"
                  className="w-full h-full object-contain rounded-lg brightness-95 hover:brightness-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 rounded-lg group-hover:bg-black/5 transition-all duration-500"></div>
              
              </motion.div>
            </div>

            {/* Center content column */}
            <div className="lg:w-3/5 flex flex-col">
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

                {/* Three images in row with equal height */}
                <div className="flex justify-center w-full mt-12 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {[bottomImages[1], bottomImages[2], bottomImages[3]].map(
                      (img, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="relative h-[40vh] md:h-[35vh] w-full group bg-black"
                        >
                          <img
                            src={img}
                            alt={`Hotel Design Center ${index + 1}`}
                            className="w-full h-full object-contain rounded-lg brightness-100 hover:brightness-110 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-lg group-hover:bg-black/5 transition-all duration-500"></div>
                          <div className="absolute bottom-6 left-6 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            0{index + 2}
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>

                {/* Text content below the three images in bordered card */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="w-full px-4 mt-12"
                >
                  <div className="border-2 border-white/20 rounded-xl p-6 bg-black/40 backdrop-blur-sm">
                    <div className="text-white/80 text-lg md:text-xl leading-relaxed space-y-4">
                      <p>
                        I have tried to work on structural system, mechanical
                        system, HVAC system, electrical system, envelope system,
                        sustainable, smart building system, finishing system,
                        technology system.
                      </p>
                      <p>
                        In general, the building is located on an area of 600 m²,
                        with 4 basements, ground-2nd floor customer service program,
                        3rd floor-6th floor bedrooms.
                      </p>
                      <p>
                        The facade design is to have a rhythm character and reduce
                        sunlight. The materials I have tried to use are wood, R.C.C
                        wall, shear wall etc.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Email at the bottom */}
                {/* <motion.div
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
                </motion.div> */}
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
              className="relative h-[30vh] md:h-[35vh] w-full group bg-black"
            >
              <img
                src={img}
                alt={`Hotel Design ${index + 1}`}
                className="w-full h-full object-contain rounded-lg brightness-100 hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-lg group-hover:bg-black/5 transition-all duration-500"></div>
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
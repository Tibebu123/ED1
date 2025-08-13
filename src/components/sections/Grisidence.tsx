import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/3resdence.png";
import residence2 from "../../assets/images/3resdenced.png";

export function Grisidence() {
  return (
    <div className="bg-gray-900">
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 overflow-x-hidden">
        <section
          id="services"
          className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

          <div className="container mx-auto px-4 h-full flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start flex-grow">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col h-full text-white"
              >
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent mb-10"
                >
                  PORTFOLIO <span className="text-green-500">2025</span>
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl font-bold mb-8 text-blue-400"
                >
                  G+3 RESIDENCE
                </motion.h2>

                {/* Bordered Card for Design Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="p-8 border-2 border-white/20 rounded-xl mb-10 bg-gray-900/50 backdrop-blur-sm"
                >
                  <motion.h3 className="text-4xl font-semibold mb-6">
                    DESIGN
                  </motion.h3>

                  <motion.p className="text-2xl leading-relaxed mb-6">
                    Following are some of the projects I have done during my
                    university stay. This G+3 Residence was designed on a 3*3
                    site. Including a parking space was one of the challenges
                    that a house should meet.
                  </motion.p>

                  <motion.p className="text-2xl leading-relaxed mb-6">
                    However, to solve this problem, I used furniture technology,
                    made furniture and rooms multi-functional, and made a
                    parking basement using a hydraulic lift so that the car can
                    enter the ground and then go down to the basement.
                  </motion.p>

                  <motion.p className="text-2xl leading-relaxed">
                    I designed it using these and other solutions.
                  </motion.p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-3xl font-medium"
                >
                  LOCATION:{" "}
                  <span className="text-blue-400">HOSSANA, ETHIOPIA</span>
                </motion.p>
              </motion.div>

              {/* Right Column - Two images */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-8 h-full"
              >
                <motion.div
                  className="relative h-[45vh] w-full group bg-black"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={residence1}
                    alt="Residence View 1"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>

                <motion.div
                  className="relative h-[45vh] w-full group bg-black"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={residence2}
                    alt="Residence View 2"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

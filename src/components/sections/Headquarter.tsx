import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/firstfloor.jpg";
import residence2 from "../../assets/images/14flor.jpg";

export function Headquarter() {
  return (
    <div className="bg-gray-900"> {/* Full-width gray background */}
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 overflow-x-hidden"> {/* Content container with margins */}
        <section className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white">
          {/* Full width horizontal line at the top */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

          <div className="container mx-auto px-4 h-full flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start flex-grow">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent"
                >
                  Head Quarter Bank DESIGN
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-xl md:text-2xl leading-relaxed mb-6"
                >
                  This building was designed for Berhan Bank headquarters and the site is located in Addis Ababa
                  Mexico and is surrounded by various buildings. I have included parking and outdoor activities in its own site
                  landscape which makes it more bank-friendly. Since the building is a high rise, there is a 2 floor basement, then a
                  podium, then it continues to the 7rd floor, and finally from the 8th floor to the 23rd tower. I have included
                  different programs on some floors beyond the bank. When we look at the building facade, I also took light as
                  a concept, which is known as the first ray of light in the morning, so the line I tried to use on the facade indicates
                  it. In addition, the entrance diagonal or also goes down to create a sense of respect and giving.
                </motion.p>
              </motion.div>

              {/* Right Column - Two Images */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-8 h-full"
              >
                {/* Top Right Image */}
                <motion.div
                  className="relative h-[45vh] w-full group"
                  // whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={residence1}
                    alt="Bank Design Top View"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>

                {/* Bottom Right Image */}
                <motion.div
                  className="relative h-[55vh] w-full group mt-auto"
                  // whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={residence2}
                    alt="Bank Design Bottom View"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>
              </motion.div>
            </div>

            {/* Location at the bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-auto pt-16 text-left"
            >
              <div className="text-xl md:text-2xl text-gray-400">
                <h1>LOCATION: ADDIS ABABA, ETHIOPIA</h1>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
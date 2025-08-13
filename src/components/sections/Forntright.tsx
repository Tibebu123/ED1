import React from "react";
import { motion } from "framer-motion";

import residence3 from "../../assets/images/lex1.png";
import residence4 from "../../assets/images/lex2.png";

export function Frontright() {
  const bottomImages = [residence3, residence4];

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section
        id="services"
        className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
      >
        {/* Full width horizontal line at the top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row">
          {/* Left column for text content - wider */}
          <div className="lg:w-2/3 lg:pr-24 flex flex-col">
            {/* Text at the top - stacked vertically */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white mb-16 mt-12"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 md:mt-12"
              >
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold italic mb-12">
                  LUXURY HOTEL DESIGN
                </h2>
              </motion.div>
            </motion.div>

            {/* Project description - larger text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-white/80 text-xl md:text-2xl leading-relaxed"
            >
              <p className="mb-8">
                This was intended to be a luxury hotel design and the site I was
                given was a place called Gopher Meadow in Hosanna City, which is
                a wetland and marshy area, which made it more difficult to find
                a structurally sound work. I completed the program that a luxury
                hotel should have as a site. However, when we first went to the
                form concept, the place was very windy, so I created a stepped
                form to allow the wind to break and have rhythm, and as a
                solution for the land, I used a pile foundation. As you can see,
                my building was becoming a step every floor, so in addition to
                the column and beam, I tried to reduce the lateral load by using
                a braced frame system, the facade and core space were another
                structural support
              </p>
            </motion.div>

            {/* Email at the bottom with animation - larger */}
          </div>

          {/* Right column for images - pushed to far right */}
          <div className="lg:w-1/3 flex flex-col mt-12 lg:mt-0 lg:pl-0">
            {/* Top right image - taller */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="relative h-96 md:h-[32rem] w-full mb-12 group bg-black"
            >
              <img
                src={bottomImages[0]}
                alt="Hotel Design Top"
                className="w-full h-full object-cover rounded-lg brightness-90 hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 rounded-lg group-hover:bg-black/5 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                01
              </div>
              <div className="absolute inset-0 rounded-lg pointer-events-none mix-blend-overlay bg-gradient-to-br from-transparent via-transparent to-white/5"></div>
            </motion.div>

            {/* Spacer */}
            <div className="flex-grow"></div>

            {/* Bottom right image - taller */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="relative h-96 md:h-[32rem] w-full mt-12 group bg-black"
            >
              <img
                src={bottomImages[1]}
                alt="Hotel Design Bottom"
                className="w-full h-full object-cover rounded-lg brightness-90 hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 rounded-lg group-hover:bg-black/5 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                02
              </div>
              <div className="absolute inset-0 rounded-lg pointer-events-none mix-blend-overlay bg-gradient-to-br from-transparent via-transparent to-white/5"></div>
            </motion.div>
          </div>
        </div>

        {/* Four images at the bottom (hidden on lg screens) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="lg:hidden grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {bottomImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="relative h-80 md:h-[28rem] w-full group bg-black"
            >
              <img
                src={img}
                alt={`Hotel Design ${index + 1}`}
                className="w-full h-full object-cover rounded-lg brightness-90 hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 rounded-lg group-hover:bg-black/5 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                0{index + 1}
              </div>
              <div className="absolute inset-0 rounded-lg pointer-events-none mix-blend-overlay bg-gradient-to-br from-transparent via-transparent to-white/5"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

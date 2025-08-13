import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/haydrosectionA.png";
import residence2 from "../../assets/images/Haydrolicelevation.png";
import residence3 from "../../assets/images/haydrolicel1.png";
import residence4 from "../../assets/images/haydroeast.png";
import residence5 from "../../assets/images/haydroweast.png";
import residence6 from "../../assets/images/haydrosouth.png";

export function Haydrolic() {
  return (
    <div className="bg-gray-900"> {/* Full-width gray background */}
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 overflow-x-hidden"> {/* Content container with margins */}
        <section
          id="services"
          className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
        >
          {/* Full width horizontal line at the top */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

          <div className="container mx-auto px-4 h-full flex flex-col">
            {/* Top Section - Text left, Image right */}
            <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8 mb-12">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl font-bold mb-6 text-blue-400"
                >
                  Hydraulic Furniture
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-2xl leading-relaxed"
                >
                  Hydraulic furniture, also known as hydraulic storage
                  beds, are innovative pieces of furniture that provide both
                  comfort and functionality. This table is used for the type
                  of table we use in the living room, and I chose it because
                  it is a hydraulic furniture, so that it can be used as a
                  bookshelf, sometimes as a dining room, and it helps to
                  save space.
                </motion.p>
              </motion.div>

              {/* Right Column - Top Image (further reduced width) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[50vh] w-[80%] group bg-black ml-auto"
              >
                <img
                  src={residence1}
                  alt="Hydraulic Furniture"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>
            </div>

            {/* Bottom Section - 5 Images in row with last 3 narrower */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full"
            >
              {/* First two images (full width) */}
              <motion.div
                className="relative h-[35vh] w-full group bg-black col-span-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={residence2}
                  alt="Furniture Detail 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>
              
              <motion.div
                className="relative h-[35vh] w-full group bg-black col-span-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={residence3}
                  alt="Furniture Detail 2"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>
              
              {/* Last three images (narrower) */}
              <motion.div
                className="relative h-[35vh] w-[80%] group bg-black col-span-1 ml-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={residence4}
                  alt="Furniture Detail 3"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>
              
              <motion.div
                className="relative h-[35vh] w-[80%] group bg-black col-span-1 ml-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={residence5}
                  alt="Furniture Detail 4"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>
              
              <motion.div
                className="relative h-[35vh] w-[80%] group bg-black col-span-1 ml-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={residence6}
                  alt="Furniture Detail 5"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
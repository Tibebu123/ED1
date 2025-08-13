import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/images/headoffice1.png";
import image2 from "../../assets/images/headeoffice2.png";
import image3 from "../../assets/images/headoffice3.png";
import image4 from "../../assets/images/headoffive4.png";

export function Elevation1() {
  return (
    <div className="bg-gray-900"> {/* Full-width gray background */}
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 overflow-x-hidden"> {/* Content container with margins */}
        <section className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white">
          {/* Full width horizontal line at the top */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

          <div className="container mx-auto px-4 h-full flex flex-col">
            {/* Text Content at Top */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white mb-12"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent"
              >
                Elevation &Section
              </motion.h1>
            </motion.div>

            {/* Spacer to push images to bottom */}
            <div className="flex-grow"></div>

            {/* Four Images in Row at Absolute Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16" // Increased top margin
            >
              {[image1, image2, image3, image4].map((img, index) => (
                <motion.div
                  key={index}
                  className="relative h-[50vh] max-w-full group mt-40"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={img}
                    alt={`Furniture Design ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </motion.div>

            {/* Email at the bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-40 text-left"
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
    </div>
  );
}
import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/northelevation.jpg";
import residence2 from "../../assets/images/sectionB.jpg";
import residence3 from "../../assets/images/southelevation.jpg";
import residence4 from "../../assets/images/sectionA.jpg";
import residence5 from "../../assets/images/eastelevation.jpg";
import residence6 from "../../assets/images/westelevation.jpg";

export function Elevation() {
  const images = [
    residence1,
    residence2,
    residence3,
    residence4,
    residence5,
    residence6,
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-900">
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 overflow-x-hidden">
        <section
          id="services"
          className="relative min-h-screen w-full bg-black py-8 md:py-16 border-t-8 border-white"
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

          <div className="container mx-auto px-4 h-full flex flex-col">
            {/* Portfolio title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-white mb-8 md:mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                PORTFOLIO <span className="text-green-500">{currentYear}</span>
              </h1>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 items-start flex-grow">
              {/* Image Gallery - full width */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-[70%] order-1"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative h-48 sm:h-56 w-full group bg-black"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={image}
                        alt={`Architectural Work ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Text Content - hidden on mobile (will appear at bottom) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block w-full lg:w-[30%] text-white space-y-8 order-2"
              >
                <div className="border-2 border-white/20 rounded-lg p-6 bg-black/50 backdrop-blur-sm">
                  
                  <p className="text-lg md:text-xl leading-relaxed">
                    The bedrooms are on the east side and have their own
                    balconies. I created a landscape with good access. I tried
                    to design a modern house that was not too extravagant. I
                    used a flat roof and used stone on the front wall for
                    aesthetic and environmental reasons. When we enter, the
                    entrance area is double height, which creates a nice view
                    and welcoming feel.
                  </p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-blue-400 mb-6">
                    ELEVATION & SECTION
                  </h1>
                </div>
              </motion.div>
            </div>

            {/* Text Content for Mobile - appears at bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="lg:hidden w-full text-white mt-8 order-3"
            >
              <div className="border-2 border-white/20 rounded-lg p-6 bg-black/50 backdrop-blur-sm">
               
                <p className="text-lg leading-relaxed">
                  The bedrooms are on the east side and have their own
                  balconies. I created a landscape with good access. I tried to
                  design a modern house that was not too extravagant. I used a
                  flat roof and used stone on the front wall for aesthetic and
                  environmental reasons. When we enter, the entrance area is
                  double height, which creates a nice view and welcoming feel.
                </p>
                 <h1 className="text-3xl font-medium text-blue-400 mb-4">
                  ELEVATION & SECTION
                </h1>
              </div>
            </motion.div>

            {/* Email at the bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 md:mt-16 pt-8 text-left order-4"
            >
              <a
                href="mailto:eden616227@gmail.com"
                className="text-xl md:text-2xl lg:text-3xl text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-block border-b-2 border-transparent hover:border-blue-400"
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

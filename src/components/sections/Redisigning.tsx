import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/eden52.png";
import residence2 from "../../assets/images/eden7.png";

export function Redisigning() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    }, 1000 * 60 * 60 * 24);
    return () => clearInterval(timer);
  }, [currentYear]);

  return (
    <div className="bg-gray-900">
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
        <section
          id="services"
          className="relative min-h-screen w-full bg-black py-12 md:py-16 overflow-hidden border-t-8 border-white"
        >
          {/* Top horizontal line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

          {/* Floating background */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-900/20 blur-3xl -z-0"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-blue-400/10 blur-3xl -z-0"></div>

          <div className="container mx-auto px-4 h-full flex flex-col relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start flex-grow">
              {/* Left column */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-white space-y-8 md:space-y-12"
                >
                  <div className="mb-8 md:mb-12">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-serif">
                      <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
                        PORTFOLIO
                      </span>
                      <span className="ml-4 sm:ml-8 md:ml-20 text-white">
                        {currentYear}
                      </span>
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-transparent mt-4"></div>
                  </div>

                  <div className="space-y-6 md:space-y-10">
                    <motion.h1
                      className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 font-serif"
                      whileHover={{ scale: 1.02 }}
                    >
                      G+1 RESIDENCE DESIGN
                    </motion.h1>
                  </div>
                </motion.div>

                {/* Left image */}
                <motion.div
                  className="mt-8 w-full h-[280px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <img
                    src={residence2}
                    alt="Additional Architectural Work"
                    className="w-full h-full object-contain sm:object-cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectPosition: "center",
                    }}
                  />
                </motion.div>
              </div>

              {/* Right column */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative mt-8 md:mt-0"
              >
                <div className="w-full h-[280px] sm:h-[300px] md:h-[400px] lg:h-[450px] mb-8 md:mb-10">
                  <img
                    src={residence1}
                    alt="Architectural Work"
                    className="w-full h-full object-contain sm:object-cover rounded-lg"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectPosition: "center",
                    }}
                  />
                </div>

                <motion.div
                  className="bg-gray-900/50 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="space-y-4 md:space-y-6">
                    <div className="space-y-4">
                      <p className="text-base md:text-lg leading-relaxed text-gray-300 font-light">
                        <span className="font-medium text-white">
                          Location:
                        </span>{" "}
                        Meki, Ethiopia
                      </p>
                      <p className="text-base md:text-lg leading-relaxed text-gray-300 font-light">
                        <span className="font-medium text-white">Type:</span>{" "}
                        Residential (G+1)
                      </p>
                      <p className="text-base md:text-lg leading-relaxed text-gray-300 font-light">
                        <span className="font-medium text-white">Area:</span>{" "}
                        40m × 20m
                      </p>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-base md:text-lg leading-relaxed text-gray-300 font-light">
                        This G+1 residence is designed for the whole family in a
                        place located in Meki city. This project is one of the
                        projects I worked on during my internship. However,
                        according to the client's request and needs, since the
                        area is surrounded by resorts and residential areas, in
                        addition to meeting all the programs, the house needed
                        to have a courtyard. I thought that fresh air would
                        circulate more in the house. The total area is 40 * 20
                        and the main entrance is on the north side.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 md:mt-16 pt-8 md:pt-16 text-left"
            >
              <div className="inline-flex items-center bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-lg sm:text-xl text-white font-medium">
                  MEKI, ETHIOPIA
                </span>
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-blue-400/30 rounded-full"></div>
          <div className="absolute top-1/3 right-20 w-10 h-10 border border-white/20 rotate-45"></div>
        </section>
      </div>
    </div>
  );
}

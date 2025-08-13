import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/images/ednex1.png";

export function Services() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Auto-update the year
    const timer = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    }, 1000 * 60 * 60 * 24); // Check daily

    return () => clearInterval(timer);
  }, [currentYear]);

  return (
    <div className="bg-gray-900">
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-24 bg-gray-900">
        <section
          id="services"
          className="relative min-h-screen w-full bg-black py-12 sm:py-16 border-t-8 border-white"
        >
          {/* Full width horizontal line at the top */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

          <div className="container mx-auto px-4 h-full flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start flex-grow">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white space-y-8 sm:space-y-12"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent font-serif">
                  <span>PORTFOLIO</span>
                  <span className="ml-8 sm:ml-12 md:ml-20">{currentYear}</span>
                </h1>

                <div className="space-y-8 sm:space-y-12">
                  <motion.h1
                    className="text-5xl sm:text-6xl md:text-7xl font-bold text-blue-400 font-serif tracking-tight leading-tight"
                    whileHover={{ scale: 1.02 }}
                  >
                    SOFTWARE
                  </motion.h1>
                  <motion.h1
                    className="text-5xl sm:text-6xl md:text-7xl font-bold text-blue-400 font-serif tracking-tight leading-tight"
                    whileHover={{ scale: 1.02 }}
                  >
                    SKILLS
                  </motion.h1>
                  <ul className="space-y-4 sm:space-y-6 text-2xl sm:text-3xl font-light">
                    {[
                      "Autocad",
                      "Revit",
                      "Photoshop",
                      "Adobe Illustrator",
                      "Lumion",
                      "Sketchup",
                    ].map((skill) => (
                      <motion.li
                        key={skill}
                        whileHover={{ x: 8 }}
                        className="flex items-center group font-sans"
                      >
                        <span className="w-3 h-3 bg-blue-400 rounded-full mr-4 transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Right Column - Image and Experience */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Image with responsive height */}
                <div className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] mb-8 sm:mb-12 group overflow-hidden rounded-xl">
                  <img
                    src={backgroundImage}
                    alt="Architectural Work"
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
                </div>

                {/* Experience section */}
                <div className="text-white space-y-6 sm:space-y-8">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 font-serif tracking-tight">
                    EXPERIENCE
                  </h1>

                  <div className="space-y-6 sm:space-y-8">
                    <div className="bg-black/30 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-blue-300 font-sans">
                        February 2024 - April 2024
                      </h2>
                      <h3 className="text-xl sm:text-2xl font-medium mt-2 text-white font-sans">
                        • Yedcon plc
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed mt-3 font-sans">
                        Gained professional experience designing residential and
                        commercial buildings during a two-month engagement.
                      </p>
                    </div>

                    <div className="bg-black/30 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-blue-300 font-sans">
                        July 2024 - September 2024
                      </h2>
                      <h3 className="text-xl sm:text-2xl font-medium mt-2 text-white font-sans">
                        • Habtamu Getachew Architect and Consultant Company
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed mt-3 font-sans">
                        Completed intensive internship designing diverse
                        projects including residences, commercial buildings, and
                        public structures.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Email at the bottom with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pt-12 sm:pt-16 text-left"
            >
              <a
                href="mailto:eden616227@gmail.com"
                className="text-xl sm:text-2xl md:text-3xl text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-block border-b-2 border-transparent hover:border-blue-400 font-sans"
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

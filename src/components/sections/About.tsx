import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/images/eden3.png";

export function About() {
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
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section
        id="about"
        className="relative min-h-screen w-full overflow-hidden border-t-8 border-black"
      >
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Architectural Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 min-h-screen flex items-center justify-center py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 1, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              {/* Glass Card - Responsive sizing */}
              <div className="backdrop-blur-lg bg-black/50 border border-white/20 rounded-3xl shadow-2xl overflow-hidden w-full transform transition-all duration-300 hover:shadow-blue-500/20 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
                <div className="p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
                  {/* Portfolio Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-center mb-8 sm:mb-12"
                  >
                    <motion.h2
                      initial={{ letterSpacing: "0.5em" }}
                      whileInView={{ letterSpacing: "0.15em" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-wider font-serif"
                    >
                      PORTFOLIO{" "}
                      <span className="text-blue-300">{currentYear}</span>
                    </motion.h2>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "80px" }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="h-1 bg-amber-400 mx-auto mb-6 sm:mb-8 rounded-full"
                    />
                  </motion.div>

                  {/* Welcome Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8 sm:mb-12 text-center"
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-serif">
                      Welcome
                    </h2>
                  </motion.div>

                  {/* Main Text Content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="space-y-4 sm:space-y-6 text-white leading-relaxed text-base sm:text-lg md:text-xl px-2 sm:px-4"
                  >
                    <p className="text-justify font-light tracking-wide font-sans">
                      My name is{" "}
                      <span className="font-bold text-blue-300">
                        Eden Yilak
                      </span>
                      , and I earned a Bachelor's degree in Architecture from{" "}
                      <span className="font-semibold text-amber-300">
                        Wachemo University
                      </span>{" "}
                      on{" "}
                      <span className="font-medium text-green-300">
                        June 21, 2025
                      </span>
                      , with a CGPA of <span className="font-bold">2.79</span>{" "}
                      and an average of <span className="font-bold">61%</span>{" "}
                      on the national exit exam.
                    </p>

                    <p className="text-justify font-light tracking-wide font-sans">
                      During my studies, I honed my skills in{" "}
                      <span className="font-medium text-blue-300">design</span>,{" "}
                      <span className="font-medium text-blue-300">
                        drafting
                      </span>
                      , and{" "}
                      <span className="font-medium text-blue-300">
                        3D modeling
                      </span>
                      , while gaining a solid understanding of{" "}
                      <span className="font-medium text-green-300">
                        sustainable
                      </span>{" "}
                      and{" "}
                      <span className="font-medium text-green-300">
                        functional architectural principles
                      </span>
                      .
                    </p>

                    <p className="text-justify font-light tracking-wide font-sans">
                      Throughout my time at university, I worked on various
                      projects, including designs for{" "}
                      <span className="font-medium text-amber-300">
                        residential
                      </span>
                      ,{" "}
                      <span className="font-medium text-amber-300">
                        commercial
                      </span>
                      ,{" "}
                      <span className="font-medium text-amber-300">office</span>
                      ,{" "}
                      <span className="font-medium text-amber-300">hotel</span>,
                      and{" "}
                      <span className="font-medium text-amber-300">
                        bank buildings
                      </span>
                      .
                    </p>

                    <p className="text-justify font-light tracking-wide font-sans">
                      My thesis project focused on{" "}
                      <span className="font-bold">
                        redesigning an open market in Hossana City
                      </span>
                      , addressing several issues present at the site through
                      innovative{" "}
                      <span className="italic">urban design solutions</span> and{" "}
                      <span className="italic">community-focused planning</span>
                      .
                    </p>

                    {/* Email Section */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-white/10 text-center"
                    >
                      <p className="text-lg sm:text-xl md:text-2xl text-white">
                        <a
                          href="mailto:eden616227@gmail.com"
                          className="block mt-2 sm:mt-4 font-bold text-blue-300 hover:text-blue-200 transition-colors text-xl sm:text-2xl md:text-3xl"
                        >
                          eden616227@gmail.com
                        </a>
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

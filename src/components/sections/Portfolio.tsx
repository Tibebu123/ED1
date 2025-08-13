import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/images/eden3.png";

export function Portfolio() {
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
        id="portfolio"
        className="relative min-h-screen bg-black border-t-8 border-white"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]" />
        </div>

        {/* Mobile-only Portfolio Title (centered at top) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:hidden w-full text-center pt-12 pb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-wider font-serif">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-blue-400">
              PORTFOLIO
            </span>{" "}
            <span className="text-white">{currentYear}</span>
          </h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row h-full w-full">
          {/* Left side with image */}
          <div className="w-full lg:w-[50%] h-auto lg:h-screen relative lg:left-40">
            {/* Desktop Portfolio Title (vertical) - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="hidden lg:flex absolute left-2 right-52 top-32 lg:top-auto lg:mt-80 h-full items-center justify-center z-40 pointer-events-none pl-4 lg:pl-8 xl:pl-12"
            >
              <div className="text-left transform -rotate-90 origin-left">
                <motion.div
                  initial={{ letterSpacing: "0.5em" }}
                  whileInView={{ letterSpacing: "0.2em" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-widest whitespace-nowrap font-serif"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-blue-400">
                    PORTFOLIO
                  </span>{" "}
                  <span className="text-white">{currentYear}</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Image with effects */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[50vh] sm:h-[60vh] lg:h-full w-full md:w-[85%] ml-auto relative group mt-0 lg:mt-0"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-amber-400/20 to-blue-400/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-500"></div>
              <img
                src={backgroundImage}
                alt="Architectural Portfolio"
                className="w-full h-full object-cover rounded-lg relative z-10"
              />
              <div className="absolute inset-0 bg-black/10 z-20 rounded-lg" />
              <div className="absolute inset-0 border border-white/10 rounded-lg z-30 pointer-events-none"></div>
            </motion.div>
          </div>

          {/* Right side content */}
          <div className="w-full lg:w-[70%] flex items-center justify-center py-8 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white w-full max-w-2xl"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 mb-6 sm:mb-8 pl-4 sm:pl-9 font-serif">
                TABLE
              </h2>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 mb-8 sm:mb-12 pl-4 sm:pl-9 font-serif">
                CONTAINTES
              </h2>

              {/* Projects Table */}
              <div className="mb-8 sm:mb-12">
                <ul className="space-y-4 sm:space-y-5 text-lg sm:text-xl md:text-2xl pl-4 sm:pl-10 font-sans">
                  {[
                    "Residence building design",
                    "Headquarter bank building design",
                    "Hotel building design",
                    "Open market place redesign",
                    "Cinema hall design",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start"
                    >
                      <span className="text-amber-400 mr-4 sm:mr-6 text-xl sm:text-2xl">
                        {index + 1}•
                      </span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-4 sm:mr-6 text-xl sm:text-2xl">
                      6•
                    </span>
                    <div>
                      <span>Interior design</span>
                      <ul className="ml-4 sm:ml-8 mt-2 sm:mt-3 space-y-2 sm:space-y-3">
                        {[
                          "Kitchen design",
                          "Living room design",
                          "Bedroom design",
                          "Office design",
                        ].map((subItem, subIndex) => (
                          <motion.li
                            key={subIndex}
                            whileHover={{ x: 5 }}
                            className="flex items-start"
                          >
                            <span className="text-blue-300 mr-2 sm:mr-4 text-lg sm:text-xl">
                              -
                            </span>
                            <span>{subItem}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-start">
                    <span className="text-amber-400 mr-4 sm:mr-6 text-xl sm:text-2xl">
                      7•
                    </span>
                    <span>Exhibition works</span>
                  </motion.li>
                </ul>
              </div>

              {/* Email Contact Section */}
              <motion.div className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20 pl-4 sm:pl-9">
                <div className="inline-flex items-center group">
                  <a
                    href="mailto:eden61627@gmail.com"
                    className="relative text-blue-400 hover:text-blue-300 text-xl sm:text-2xl md:text-3xl transition-all font-medium font-sans"
                  >
                    <span className="relative z-10">eden61627@gmail.com</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

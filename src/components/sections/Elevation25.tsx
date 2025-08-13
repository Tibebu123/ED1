import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/ele25.png";
import residence2 from "../../assets/images/elev25.jpg";
import residence3 from "../../assets/images/rightelv.png";
import residence4 from "../../assets/images/frontelv.png";

export function Elevation25() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section
        id="services"
        className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
      >
        {/* Full width horizontal line at the top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
              CINEMA HALL DESIGN
            </h2>
          </motion.div>

          {/* Four images grid at the top */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <div className="relative h-48 md:h-64 w-full group">
              <img
                src={residence1}
                alt="Cinema Design 1"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="relative h-48 md:h-64 w-full group">
              <img
                src={residence2}
                alt="Cinema Design 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="relative h-48 md:h-64 w-full group">
              <img
                src={residence3}
                alt="Cinema Design 3"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="relative h-48 md:h-64 w-full group">
              <img
                src={residence4}
                alt="Cinema Design 4"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </motion.div>

          {/* Text content at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-auto bg-gray-800/50 p-6 md:p-8 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ELEVATION & SECTION
            </h3>
            <div className="text-gray-300 text-lg md:text-xl space-y-4">
              <p>
                <span className="font-semibold">Color choice:</span> Wall and
                ceiling black color
              </p>

              <p>
                <span className="font-semibold">
                  Light Absorption Minimizing Reflections:
                </span>{" "}
                Black walls absorb light rather than reflecting it, which helps
                to reduce glare and distractions. This is particularly important
                in a cinema setting, where the focus should be on the screen.
              </p>

              <p>
                <span className="font-semibold">
                  Enhancing Screen Visibility:
                </span>{" "}
                By minimizing ambient light and reflections, black walls allow
                the projected images to appear more vibrant and clear, improving
                the overall viewing experience.
              </p>

              <p>
                <span className="font-semibold">
                  Creating an Immersive Environment:
                </span>{" "}
                Black walls help to create a dark, immersive environment that
                draws the audience's attention to the screen. This can enhance
                the emotional impact of the film and make viewers feel more
                engaged.
              </p>

              <p>
                <span className="font-semibold">Acoustic Benefits:</span> Dark
                colors, particularly black, can help absorb sound, which is
                beneficial for the acoustics of the cinema. This can enhance the
                audio experience by reducing echoes and improving sound quality.
              </p>

              <p className="text-2xl md:text-3xl text-gray-400 mt-6 text-center">
                LOCATION: HOSSANA, ETHIOPIA
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Elevation25;

import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/cinima1.png";
import residence2 from "../../assets/images/cinima2.png";

export function Cinmahall() {
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
              CINEMA HALL DESIGN
            </h2>
          </motion.div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left column - text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-300 text-lg md:text-xl"
            >
              <div className="mb-8">
                <p className="font-bold text-xl md:text-2xl mb-2">Area: 990</p>
                <p className="mb-1">Material used:</p>
                <p className="mb-1">- Floor: cork wood flooring</p>
                <p className="mb-1">- Wall: acoustic wall fabric</p>
                <p className="mb-1">- Ceiling: plaster of paris</p>
                <p>- Seating material: acoustic foam chair</p>
              </div>

              <p className="mb-4">
                As shown in the floor plan, I designed the cinema hall, so I
                included the additional program that I thought was necessary for
                it. The cinema room is located on the first floor and has 308
                seats and 6 doors.
              </p>

              <p className="mb-4">
                In terms of sound, I tried to make the wall design zigzag
                instead of a straight wall because when the sounds are called,
                they reflect back on that wall. Also, the zigzag of the wall
                will allow the sound to reach the audience easily through
                reflection.
              </p>

              <p className="mb-4">
                Similarly, the reason why I made the wall behind it concave is
                that. For the wall, I used acoustical wall fabric material.
              </p>

              <p className="text-2xl md:text-3xl text-gray-400 mt-8">
                LOCATION: HOSSANA, ETHIOPIA
              </p>
            </motion.div>

            {/* Right column - images positioned at bottom */}
            <div className="flex flex-col justify-end h-full mt-16">
              {" "}
              {/* Added mt-16 for top margin */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative h-64 w-full group"
                >
                  <img
                    src={residence1}
                    alt="Cinema Hall Design 1"
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-xl group-hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative h-64 w-full group"
                >
                  <img
                    src={residence2}
                    alt="Cinema Hall Design 2"
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-xl group-hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cinmahall;

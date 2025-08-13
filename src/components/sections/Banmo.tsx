import React from "react";
import { motion } from "framer-motion";
import residence1 from "../../assets/images/Bambo.png";
import residence2 from "../../assets/images/BACK.jpg";

export function Bamoo() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
      <section
        id="services"
        className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
      >
        {/* Full width horizontal line at the top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start flex-grow">
            {/* Left column - text content */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 text-xl md:text-2xl lg:text-3xl" // Increased font size
              >
                <p className="mb-8">
                  {" "}
                  {/* Increased margin-bottom */}
                  As we can see on the site, there are many programs taking
                  place, and to overcome the problems that were identified as
                  problems in the research, they tried to make all the programs
                  together and make it a multifunctional site.
                </p>
                <p className="mb-8">
                  However, as we can see on the site plan, I designed a closed
                  shop mall building, and I created a space for people who want
                  to do sports activities. I also created a space for it to be
                  used as a garden. We also have an open marketplace, and I
                  tried to make it accessible by designing suitable shade for it
                  and creating their own space.
                </p>
                <p className="mb-8">
                  In general, about 505 merchants are hosted on the site. Next,
                  the annual baptism festival is held on the site, but I tried
                  to create a way for it to be held without conflicting with
                  others. Also, since there was no seating area or toilet
                  service on the site, I created
                </p>
              </motion.div>
            </div>

            {/* Right column - image and text */}
            <div className="flex flex-col gap-8 mt-12">
              {" "}
              {/* Added top margin */}
              {/* Top image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative h-96 w-full group bg-black"
              >
                <img
                  src={residence1}
                  alt="Market Section 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>
              {/* Text below the image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-xl md:text-2xl" // Increased font size
              >
                <p>
                  These shades are 2x6 in size and each has its own shelf,
                  hangers, and I also created space for storage on their
                  shelves. I tried to make it accessible by designing suitable
                  shade for it and creating their own space. In general, about
                  505 merchants are hosted on the site.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Location at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-auto pt-16 text-center"
          >
            <p className="text-3xl md:text-4xl text-gray-400">
              {" "}
              {/* Increased font size */}
              LOCATION: HOSSANA, ETHIOPIA
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Bamoo;

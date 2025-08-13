import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "../ui/NavLink";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <div className="md:hidden">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 dark:text-gray-300 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-800 dark:text-white" />
        ) : (
          <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40"
              onClick={closeMenu}
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg p-6 z-50 border-t border-gray-200 dark:border-gray-700"
            >
              <nav className="flex flex-col gap-4">
                {[
                  "Home",
                  "About",
                  "Portfolio",
                  "Services",
                  "Team",
                  "Contact",
                ].map((item) => (
                  <motion.div key={item} variants={itemVariants}>
                    <NavLink
                      href={`#${item.toLowerCase()}`}
                      onClick={closeMenu}
                      className="text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      {item}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

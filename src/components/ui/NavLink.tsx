import React from "react";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="text-gray-450 hover:text-blue-600 transition-colors relative group block"
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
    </motion.a>
  );
}

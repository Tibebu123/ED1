// import React from "react";
// import { NavLink } from "../ui/NavLink";
// import { MobileMenu } from "./MobileMenu";
// import { ThemeToggle } from "../ui/ThemeToggle";
// import imagee24 from "../../assets/images/eduye.jpg"; // Import your image

// export function Header() {
//   const scrollToContact = () => {
//     const contactSection = document.getElementById("contact");
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <header className="fixed w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm z-50 py-4 transition-colors duration-200">
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           {/* Circular Logo */}
//           <img
//             src={imagee24} // Use the imported image
//             alt="Eden Logo"
//             className="h-8 w-8 rounded-full object-cover" // Make it circular
//           />
//           <span className="text-2xl font-bold text-gray-900 dark:text-white">
//             Eden
//           </span>
//         </div>

//         <nav className="hidden md:flex items-center gap-8" >
//           <NavLink href="#home">Home</NavLink>
//           <NavLink href="#about">About</NavLink>
//           <NavLink href="#portfolio">Projects</NavLink>
//           <NavLink href="#services">Services</NavLink>
//           <NavLink href="#contact">Contact</NavLink>
//         </nav>

//         <div className="flex items-center gap-4">
//           <ThemeToggle />
//           <button
//             onClick={scrollToContact} // Use the click handler
//             className=" md:block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
//           >
//             Get Started
//           </button>
//           <MobileMenu />
//         </div>
//       </div>
//     </header>
//   );
// }
// import React from "react";
// import { motion } from "framer-motion";

// const educationBackground = [
//   {
//     degree: "Bachelor of Science in Architectural Engineering",
//     institution: "Wachemo University",
//     year: "2025",
//     description:
//       "Graduated with Architectural Engineering. Focused on architectural design, structural systems, and sustainable building practices.",
//     skills: ["Design", "Theory", "Structures", "Sustainability"]
//   },
//   {
//     degree: "Architectural Design and Visualization",
//     institution: "Prime Design Studio",
//     year: "2023",
//     description:
//       "Completed a project-based training program focusing on tools like AutoCAD, Revit, and SketchUp for creating 2D/3D models and renderings.",
//     skills: ["AutoCAD", "Revit", "SketchUp", "3D Modeling"]
//   },
//   {
//     degree: "Sustainable Architecture and Green Building Design",
//     institution: "Self-Learning",
//     year: "2022",
//     description:
//       "Explored sustainable architecture principles, including energy-efficient design, passive solar techniques, and LEED certification standards.",
//     skills: ["Green Design", "LEED", "Solar Techniques", "Eco Materials"]
//   },
//   {
//     degree: "Urban Planning and Landscape Design",
//     institution: "Coursera",
//     year: "2021",
//     description:
//       "Completed an online course that enhanced my understanding of urban planning, zoning regulations, and integrating natural elements into urban environments.",
//     skills: ["Urban Design", "Zoning", "Landscape", "Public Spaces"]
//   },
// ];

// export default function Education() {
//   return (
//     <section id="education" className="py-20 bg-stone-50 dark:bg-gray-900 relative overflow-hidden">
//       {/* Decorative architectural lines */}
//       <div className="absolute left-1/4 top-0 h-full w-0.5 bg-amber-500/20 hidden md:block"></div>
//       <div className="absolute left-1/2 top-0 h-full w-0.5 bg-amber-500/20 hidden md:block"></div>
//       <div className="absolute left-3/4 top-0 h-full w-0.5 bg-amber-500/20 hidden md:block"></div>
      
//       <div className="container mx-auto px-4 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-serif">
//             Academic Background
//           </h2>
//           <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
//             The structural foundation of my architectural expertise
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8 relative">
//           {/* Vertical timeline animation */}
//           <motion.div
//             initial={{ height: 0 }}
//             whileInView={{ height: "100%" }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.5, delay: 0.3 }}
//             className="absolute left-1/2 hidden md:block w-0.5 bg-blue-600 h-full"
//             style={{ transform: 'translateX(-50%)' }}
//           />
          
//           {educationBackground.map((education, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               className={`relative ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
//             >
//               {/* Animated connector dots */}
//               <motion.div
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
//                 className="hidden md:block absolute top-8 -right-1.5 w-3 h-3 rounded-full bg-blue-600 z-10"
//                 style={{ right: index % 2 === 0 ? '-1.5px' : 'auto', left: index % 2 !== 0 ? '-1.5px' : 'auto' }}
//               />
              
//               <motion.div
//                 whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
//                 className="relative h-full bg-white dark:bg-gray-800 border-l-4 border-blue-600 shadow-md rounded-r-lg p-6 transition-all duration-300 ease-in-out group"
//               >
//                 <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
//                   {education.year}
//                 </div>
                
//                 <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white font-serif group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
//                   {education.degree}
//                 </h3>
                
//                 <p className="text-blue-700 dark:text-blue-400 mb-3 font-medium">
//                   {education.institution}
//                 </p>
                
//                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
//                   {education.description}
//                 </p>
                
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {education.skills.map((skill, skillIndex) => (
//                     <span 
//                       key={skillIndex}
//                       className="bg-stone-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-full group-hover:bg-amber-100 dark:group-hover:bg-blue-900/30 transition-colors"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
                
//                 {/* Animated underline effect */}
//                 <motion.div 
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "100%" }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
//                   className="absolute bottom-0 left-0 h-0.5 bg-blue-600 origin-left"
//                 />
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
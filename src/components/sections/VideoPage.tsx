// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import officeVideo from "../../assets/videos/bach_video.mp4";

// export function Videopage() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play().catch((error) => {
//           console.error("Video playback failed:", error);
//         });
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleFullscreen = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (videoRef.current) {
//       if (videoRef.current.requestFullscreen) {
//         videoRef.current.requestFullscreen().catch((error) => {
//           console.error("Fullscreen error:", error);
//         });
//       } else if ((videoRef.current as any).webkitRequestFullscreen) {
//         /* Safari */
//         (videoRef.current as any).webkitRequestFullscreen();
//       } else if ((videoRef.current as any).msRequestFullscreen) {
//         /* IE11 */
//         (videoRef.current as any).msRequestFullscreen();
//       }
//     }
//   };

//   return (
//     <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-gray-900">
//       <section
//         id="video-section"
//         className="relative min-h-screen w-full bg-black py-16 border-t-8 border-white"
//       >
//         {/* Full width horizontal line at the top */}
//         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

//         <div className="container mx-auto px-4 h-full flex flex-col">
//           {/* Video title at top left */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-white mb-8"
//           >
//             <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
//               Hossana Lokal Market........
//             </h1>
//           </motion.div>

//           {/* Video container - Increased size */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="relative w-full max-w-[1800px] mx-auto aspect-video group bg-black rounded-lg overflow-hidden"
//             style={{
//               height: "calc(100vh - 200px)",
//               minHeight: "600px",
//             }}
//             onClick={togglePlay}
//           >
//             <video
//               ref={videoRef}
//               loop
//               muted
//               playsInline
//               className="w-full h-full object-cover"
//               preload="metadata"
//             >
//               <source src={officeVideo} type="video/mp4" />
//               Your browser does not support HTML5 video.
//             </video>

//             {/* Overlay controls */}
//             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex flex-col justify-between p-4">
//               {/* Fullscreen button - top right */}
//               <div className="flex justify-end">
//                 <button
//                   className="text-white bg-black/30 rounded-full p-2 backdrop-blur-sm hover:bg-black/50 transition-all"
//                   onClick={handleFullscreen}
//                   aria-label="Toggle fullscreen"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               {/* Play button - centered */}
//               {!isPlaying && (
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <button
//                     className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:scale-110 transition-transform duration-200"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       togglePlay();
//                     }}
//                     aria-label={isPlaying ? "Pause video" : "Play video"}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-12 w-12 text-white"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               )}

//               {/* Video info - bottom left */}
//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 whileHover={{ y: 0, opacity: 1 }}
//                 className="text-white"
//               >
//                 <p className="text-lg md:text-xl font-medium">
//                   Modern Office Space
//                 </p>
//                 <p className="text-sm opacity-80">
//                   3D Architectural Visualization
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Location section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="mt-8 text-center"
//           >
//             <p className="text-xl md:text-2xl lg:text-3xl text-gray-400">
//               LOCATION:{" "}
//               <span className="font-medium text-white">HOSSANA, ETHIOPIA</span>
//             </p>
//           </motion.div>
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute bottom-8 left-8 w-4 h-4 rounded-full bg-blue-400/30 blur-sm"></div>
//         <div className="absolute top-12 right-8 w-6 h-6 rounded-full bg-green-400/20 blur-sm"></div>
//       </section>
//     </div>
//   );
// }

// export default Videopage;

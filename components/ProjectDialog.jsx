import React from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { assets, workData, projectDetails } from "@/assets/assets";
import Link from "next/link"; // Import Link

const ProjectDialog = ({ project, onClose, isDarkMode }) => {
  if (!project) return null;

  const details = projectDetails[project.title] || {};

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        // Removed 'shadow-sm' and added 'no-scrollbar'
        className={`fixed inset-0 z-[100] overflow-y-auto no-scrollbar font-Ovo transition-colors duration-500 ${
          isDarkMode ? "bg-[#0b1120] text-white" : "bg-[#fdfdfb] text-gray-900"
        }`}
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }} // IE and Firefox
      >
        {/* Custom CSS to hide scrollbar in Chrome/Safari */}
        <style dangerouslySetInnerHTML={{__html: `
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}} />

        {/* Sticky Navigation */}
        <nav className="sticky top-0 z-50 p-6 flex items-center bg-inherit/80 backdrop-blur-md">
          <button
            onClick={onClose}
            className="flex items-center gap-2 font-medium hover:opacity-60 transition-all group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            Back to Portfolio
          </button>
        </nav>

        <div className="max-w-7xl mx-auto px-6 pb-20">
          
          {/* Hero Section - Clean, no gradient or shadow */}
          <Link 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            // Removed 'shadow-sm', added 'block' and 'cursor-pointer'
            className="block relative w-full h-[55vh] rounded-[2.5rem] overflow-hidden mb-12 border border-gray-100 dark:border-white/10 group/hero cursor-pointer"
          >
            <Image
              src={project.bgImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover/hero:scale-105"
              priority
            />
            
            {/* GRADIENT OVERLAY REMOVED FROM HERE */}

            {/* <div className="absolute bottom-12 left-12 right-12 z-10">
              <p className="text-emerald-500 font-bold mb-3 uppercase tracking-[0.3em] text-[10px] sm:text-xs">
                {details.category || "Development"}
              </p>
              <h1 className="text-4xl md:text-7xl font-semibold mb-6 leading-tight text-white drop-shadow-md">
                {project.title}
              </h1>
              <p className="max-w-2xl text-lg opacity-75 leading-relaxed font-Ovo text-white/90 drop-shadow-sm">
                {details.summary || project.Content}
              </p>
            </div> */}
          </Link>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* LEFT Column */}
            <div className="lg:col-span-2 space-y-10">
              <section
                className={`p-10 rounded-[2.5rem] border ${
                  isDarkMode 
                    ? "bg-white/5 border-white/10" 
                    : "bg-white border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                }`}
              >
                <h2 className="text-3xl font-semibold mb-8">Project Overview</h2>
                <div className="space-y-6 opacity-80 leading-relaxed text-lg font-Ovo">
                  <p>{details.overview}</p>
                  {details.detailedDescription && (
                    <p>{details.detailedDescription}</p>
                  )}
                </div>

                <div className="h-px w-full bg-gray-100 dark:bg-white/10 my-10" />

                <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {details.features?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 opacity-85 text-md">
                      <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {details.technologies?.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-5 py-2 rounded-xl text-sm font-medium border ${
                        isDarkMode 
                          ? "bg-white/5 border-white/10 text-emerald-400" 
                          : "bg-gray-50 border-gray-200 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* RIGHT Column */}
            <div className="space-y-10">
              <section
                className={`p-10 rounded-[2.5rem] border ${
                  isDarkMode 
                    ? "bg-white/5 border-white/10" 
                    : "bg-white border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                }`}
              >
                <h2 className="text-2xl font-semibold mb-10">Project Details</h2>
                <div className="space-y-10">
                  <div>
                    <p className="opacity-40 text-[10px] uppercase tracking-[0.2em] mb-2">Client</p>
                    <p className="text-xl font-medium">{details.client || "Proprietary"}</p>
                  </div>
                  <div>
                    <p className="opacity-40 text-[10px] uppercase tracking-[0.2em] mb-2">Timeline</p>
                    <p className="text-xl font-medium">{details.timeline || "Ongoing"}</p>
                  </div>
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  className="mt-12 block w-full text-center py-5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 font-bold rounded-2xl hover:opacity-90 transition-all hover:-translate-y-1"
                >
                  Visit Live Site ↗
                </Link>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDialog;












// import React from "react";
// import { motion, AnimatePresence } from "motion/react";
// import Image from "next/image";
// import { assets, workData, projectDetails } from "@/assets/assets";
// import Link from "next/link"; // Import Link

// const ProjectDialog = ({ project, onClose, isDarkMode }) => {
//   if (!project) return null;

//   const details = projectDetails[project.title] || {};

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         // Added 'scrollbar-hide' and standard CSS to hide scrollbar
//         className={`fixed inset-0 z-[100] overflow-y-auto no-scrollbar font-Ovo transition-colors duration-500 ${
//           isDarkMode ? "bg-[#0b1120] text-white" : "bg-[#fdfdfb] text-gray-900"
//         }`}
//         style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }} // IE and Firefox
//       >
//         {/* Custom CSS for Chrome/Safari inside a style tag if not using Tailwind plugin */}
//         <style dangerouslySetInnerHTML={{__html: `
//           .no-scrollbar::-webkit-scrollbar { display: none; }
//         `}} />

//         {/* Sticky Navigation */}
//         <nav className="sticky top-0 z-50 p-6 flex items-center bg-inherit/80 backdrop-blur-md">
//           <button
//             onClick={onClose}
//             className="flex items-center gap-2 font-medium hover:opacity-60 transition-all group"
//           >
//             <span className="text-xl group-hover:-translate-x-1 transition-transform">
//               ←
//             </span>
//             Back to Portfolio
//           </button>
//         </nav>

//         <div className="max-w-7xl mx-auto px-6 pb-20">
//           {/* Hero Section - Now clickable */}
//           <Link 
//             href={project.link} 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="block relative w-full h-[55vh] rounded-[2.5rem] overflow-hidden mb-12 shadow-sm border border-gray-100 dark:border-white/10 group/hero"
//           >
//             <Image
//               src={project.bgImage}
//               alt={project.title}
//               fill
//               className="object-cover transition-transform duration-700 group-hover/hero:scale-105"
//               priority
//             />
//             {/* Soft Gradient Overlay */}
//             <div
//               className={`absolute inset-0 bg-gradient-to-t ${
//                 isDarkMode 
//                   ? "from-[#0b1120] via-[#0b1120]/20" 
//                   : "from-white/95 via-transparent"
//               } to-transparent`}
//             />

//             <div className="absolute bottom-12 left-12 right-12">
//               <p className="text-emerald-500 font-bold mb-3 uppercase tracking-[0.3em] text-[10px] sm:text-xs">
//                 {details.category || "Development"}
//               </p>
//               <h1 className="text-4xl md:text-7xl font-semibold mb-6 leading-tight">
//                 {project.title}
//               </h1>
//               <p className="max-w-2xl text-lg opacity-75 leading-relaxed font-Ovo">
//                 {details.summary || project.Content}
//               </p>
//               {/* Added a small hint that the image is clickable */}
//               <p className="mt-4 text-xs font-medium opacity-50 flex items-center gap-2">
//                 Click image to visit site <span className="text-lg">↗</span>
//               </p>
//             </div>
//           </Link>

//           {/* Main Layout */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//             {/* LEFT Column */}
//             <div className="lg:col-span-2 space-y-10">
//               <section
//                 className={`p-10 rounded-[2.5rem] border ${
//                   isDarkMode 
//                     ? "bg-white/5 border-white/10" 
//                     : "bg-white border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
//                 }`}
//               >
//                 <h2 className="text-3xl font-semibold mb-8">Project Overview</h2>
//                 <div className="space-y-6 opacity-80 leading-relaxed text-lg font-Ovo">
//                   <p>{details.overview}</p>
//                   {details.detailedDescription && (
//                     <p>{details.detailedDescription}</p>
//                   )}
//                 </div>

//                 <div className="h-px w-full bg-gray-100 dark:bg-white/10 my-10" />

//                 <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
//                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {details.features?.map((feature, i) => (
//                     <li key={i} className="flex items-start gap-3 opacity-85 text-md">
//                       <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 <h3 className="text-2xl font-semibold mt-12 mb-6">Technologies Used</h3>
//                 <div className="flex flex-wrap gap-3">
//                   {details.technologies?.map((tech, i) => (
//                     <span
//                       key={i}
//                       className={`px-5 py-2 rounded-xl text-sm font-medium border ${
//                         isDarkMode 
//                           ? "bg-white/5 border-white/10 text-emerald-400" 
//                           : "bg-gray-50 border-gray-200 text-gray-700"
//                       }`}
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </section>
//             </div>

//             {/* RIGHT Column */}
//             <div className="space-y-10">
//               <section
//                 className={`p-10 rounded-[2.5rem] border ${
//                   isDarkMode 
//                     ? "bg-white/5 border-white/10" 
//                     : "bg-white border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
//                 }`}
//               >
//                 <h2 className="text-2xl font-semibold mb-10">Project Details</h2>
//                 <div className="space-y-10">
//                   <div>
//                     <p className="opacity-40 text-[10px] uppercase tracking-[0.2em] mb-2">Client</p>
//                     <p className="text-xl font-medium">{details.client || "Proprietary"}</p>
//                   </div>
//                   <div>
//                     <p className="opacity-40 text-[10px] uppercase tracking-[0.2em] mb-2">Timeline</p>
//                     <p className="text-xl font-medium">{details.timeline || "Ongoing"}</p>
//                   </div>
//                 </div>
//                 <Link
//                   href={project.link}
//                   target="_blank"
//                   className="mt-12 block w-full text-center py-5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 font-bold rounded-2xl hover:opacity-90 transition-all hover:-translate-y-1"
//                 >
//                   Visit Live Site ↗
//                 </Link>
//               </section>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default ProjectDialog;

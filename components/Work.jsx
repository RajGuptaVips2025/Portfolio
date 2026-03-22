import { workData } from "@/assets/assets";
import React, { useState } from "react";
import { motion } from "motion/react";
import ProjectDialog from "./ProjectDialog";
import Image from "next/image";

const Work = ({ isDarkMode }) => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4 className="text-center mb-2 text-lg font-Ovo">
        My portfolio
      </motion.h4>
      <motion.h2 className="text-center text-5xl font-Ovo">
        My latest work
      </motion.h2>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            onClick={() => setActiveProject(project)}
            className={`cursor-pointer block h-full group ${
              workData.length % 2 !== 0 && index === workData.length - 1
                ? "sm:col-span-2 sm:max-w-[calc(50%-1rem)] sm:mx-auto w-full"
                : ""
            }`}
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-200 dark:border-none"
            >
              {/* <div className="relative h-64 overflow-hidden">
                                <img 
                                    src={project.bgImage} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                    <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">View Project</span>
                                </div>
                            </div> */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  fill // Use fill to cover the parent container
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2 text-sm">
                  {project.Content}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Render the separate Dialog component */}
      <ProjectDialog
        project={activeProject}
        onClose={() => setActiveProject(null)}
        isDarkMode={isDarkMode}
      />
    </motion.div>
  );
};

export default Work;

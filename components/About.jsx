import { assets, infoList, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"
import Link from 'next/link'

const About = ({ isDarkMode }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <motion.div
      id='about'
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'>
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'>
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
          <Image src={assets.rajgupta} alt='user' className='w-full rounded-3xl' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1'
        >
          <p className='mb-10 max-w-2xl font-Ovo'>
            I am a full stack developer with hands-on experience building and deploying personal projects. Over the years, I’ve focused on learning modern web technologies, creating real-world applications, and continuously improving my skills through practical, self-driven developmentsssssssssssss.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
          >
            {infoList.map(({ icon, iconDark, title, description, details }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                onClick={() => setSelectedItem({ title, details })}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 overflow-y-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-3xl w-full flex flex-col gap-8"
          >
            <h2 className="text-2xl font-semibold mb-2 text-center">{selectedItem.title}</h2>

            {selectedItem.title === "Languages & Skills" && (
              <ul className="list-disc pl-6 space-y-2 text-left">
                {selectedItem.details.map((item, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {selectedItem.title === "Projects" && (
              <div className="flex flex-col gap-6">
                {workData.map((project, idx) => (
                  <div key={idx}
                    className="flex flex-col md:flex-row items-center gap-6" >
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0"
                    >
                      <motion.div
                        className="flex-shrink-0 relative rounded-lg overflow-hidden group cursor-pointer"
                        whileHover={{ scale: 1.03, y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={project.bgImage}
                          alt={project.title}
                          className="w-64 h-40 object-cover rounded-lg transition-all duration-300 group-hover:brightness-50"
                        />
                        <div
                          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold pointer-events-none 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          Click to view
                        </div>
                      </motion.div>
                    </Link>
                    <div className="flex-1 text-left">
                      <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        <span className='text-bold'>Tech Stack -</span> {project.description}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {project.Content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="text-center">
              <button
                onClick={() => setSelectedItem(null)}
                className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}

export default About
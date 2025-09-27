import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center mb-2 text-lg font-Ovo'>
                My portfolio
            </motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl font-Ovo'>
                My latest work
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-10" 
            >
                {workData.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }} 
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                        <div className="relative h-60 w-full cursor-pointer group overflow-hidden">
                            {typeof project.bgImage === "string" ? (
                                <div
                                    className="h-full w-full bg-no-repeat bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.05]"
                                    style={{ backgroundImage: `url(${project.bgImage})` }}
                                />
                            ) : (
                                <Image
                                    src={project.bgImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                                />
                            )}
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold pointer-events-none 
                                           opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                View Project
                            </div>
                        </div>

                        <div className="p-5 flex flex-col gap-2">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">
                                {project.Content} 
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Work
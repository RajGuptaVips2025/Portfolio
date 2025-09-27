import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <a href="#top" className="text-2xl font-bold font-Ovo flex items-center justify-center mb-2">
          Raj<span className="text-pink-500">.</span>
        </a>

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
          rajguptavips2025@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Raj Gupta. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href="https://github.com/RajGuptaVips2025">GitHub</a></li>
          <li><a target='_blank' href="https://www.linkedin.com/in/raj-gupta-b9b66321a/">LinkedIn</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer

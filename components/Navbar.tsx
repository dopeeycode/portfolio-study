import Image from 'next/image'

import { 
  logo, 
  cyberImg, 
  amazonImg, 
  noorShop, 
  profileImg 
} from '../public/assets/index';
import Link from 'next/link';

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
      <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:.6}} 
        className='max-w-container mx-auto h-full p-5 font-titleFont flex items-center justify-between'> 
        <motion.div
          whileHover={{opacity: .9}}
          whileTap={{scale: .7}}>
          <Image
            src={logo}
            alt='Logo'
            title='logo'
            width={70}/>
        </motion.div>
        <nav className='hidden mdl:flex gap-7 font-fontCode text-[.813rem]'>
          <ul className='flex gap-7'>
            <Link 
              href="#about"
              className='flex items-center gap-1 font-medium font-fontCode text-textLight hover:text-textGreen
              cursor-pointer duration-300 nav-link'
              >
              <motion.li
                initial={{y: -10, opacity:0}}
                animate={{y:0, opacity: 1}}
                transition={{duration: 0.3, delay: 0.1}}
              >
                <span className='text-textGreen'>01. </span>
                About
              </motion.li>
            </Link>
            <Link 
              href="#experience"
              className='flex items-center gap-1 font-medium font-fontCode text-textLight hover:text-textGreen
              cursor-pointer duration-300 nav-link'
              >
              <motion.li
                initial={{y: -10, opacity:0}}
                animate={{y:0, opacity: 1}}
                transition={{duration: 0.3, delay: 0.2}}
                >
                <span className='text-textGreen'>02. </span>
                Experience
              </motion.li>
            </Link>
            <Link 
              href="#work"
              className='flex items-center gap-1 font-medium font-fontCode text-textLight hover:text-textGreen
              cursor-pointer duration-300 nav-link'
              >
              <motion.li
                initial={{y: -10, opacity:0}}
                animate={{y:0, opacity: 1}}
                transition={{duration: 0.3, delay: 0.3}}
              >
                <span className='text-textGreen'>03. </span>
                Work
              </motion.li>
            </Link>
            <Link 
              href="#contact"
              className='flex items-center gap-1 font-medium font-fontCode text-textLight hover:text-textGreen
              cursor-pointer duration-300 nav-link'
              >
              <motion.li
                initial={{y: -10, opacity:0}}
                animate={{y:0, opacity: 1}}
                transition={{duration: 0.3, delay: 0.4}}
              >
                <span className='text-textGreen'>04. </span>
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/cf.pdf" target='_blank'>
            <motion.button
              initial={{opacity: 0}} 
              animate={{opacity: 1}} 
              transition={{delay: .5}}
              className='border py-2 px-4 rounded-[4px] text-textGreen border-textGreen hover:bg-hoverColor duration-300'
              >
              Resume
            </motion.button>
          </a>
        </nav>
        {/* small icon section */}
        <div className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer 
        overflow-hidden group'>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all
          ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-2 group-hover:translate-x-[-3] transition-all
          ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all
          ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-2 group-hover:translate-x-3 transition-all
          ease-in-out duration-300'></span>
        </div>
      </motion.div>
    </motion.header>
  )
}

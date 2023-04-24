import { motion } from "framer-motion"


export default function Banner () {
  return (
    <section 
      id="home" 
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col justs gap-4 lgl:gap-8 
      mdl:px-10 xl:px-4">
        <motion.h3
          initial={{y: 10, opacity: 10}}
          animate={{y:0, opacity: 1}}
          transition={{duration: .5, delay: .9}}
          className="text-lg font-titleFont tracking-wide text-textGreen">
            Hi, my name is
        </motion.h3>
        <motion.h1 
          className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
          initial={{y: 10, opacity: 10}}
          animate={{y:0, opacity: 1}}
          transition={{duration: .5, delay: 1}}>
            Dopeey. <span className="text-textDark mt-2 lgl:mt-4">I build things for the web</span>
        </motion.h1>
        <motion.p 
          initial={{y: 10, opacity: 10}}
          animate={{y:0, opacity: 1}}
          transition={{duration: .5, delay: 1.1}}
          className="text-base md:max-w-[650px] text-textDark font-medium ">
            I am a web developer with 4+ years of experience in React. 
            I have a strong foundation in front-end & back-end development 
            and am skilled in creating user-friendly and responsive web applications 
            using React and its ecosystem. 
            <a 
              target="_blank" 
              href="https://github.com/dopeeycode">
                <span className="text-textGreen inline-flex relative h-7 overflow-x-hidden group 
                cursor-pointer">
                  Learn More
                  <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%]
                  group-hover:translate-x-0 transition-transform duration-500"></span>
                </span>
            </a>
        </motion.p>
        <a target="_blank" href="https://github.com/dopeeycode">
          <motion.button
          initial={{y: 10, opacity: 10}}
          animate={{y:0, opacity: 1}}
          transition={{duration: .5, delay: 1.2}} 
          className="inline-flex w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen 
          items-center justify-center hover:bg-hoverColor duration-300">
            Check out my Project !
          </motion.button>
        </a>
    </section>
  )
}

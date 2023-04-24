import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import RightSide from "@/components/RightSide";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-bodyFont w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar/>
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}} 
          transition={{delay: 1.5}}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            <LeftSide/>
        </motion.div>
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}} 
          transition={{delay: .8}}
          className="h-[88vh] w-full mx-auto p-4">
            <Banner/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
        </motion.div>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}} 
          transition={{delay: 1.5}}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 top-[75vh]">
          <RightSide/>
        </motion.div>
      </div>
    </div>
  )
}

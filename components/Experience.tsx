import SectionTitle from "./SectionTitle";
import Google from "./works/Google";
import ReactBD from "./works/ReactBD";

import { useState } from 'react'
import Splash from "./works/Splash";
import Apple from "./works/Apple";
import Amazon from "./works/Amazon";

export default function Experience (){
    const [workReactBd, setReactBd] = useState(true);
    const [workGoogle, setGoogle] = useState(false);
    const [workApple, setApple] = useState(false);
    const [workSplash, setSplash] = useState(false);
    const [workAmazon, setAmazon] = useState(false);

    function handleReactbd(){
      setReactBd(true);
      setGoogle(false)
      setApple(false)
      setSplash(false)
      setAmazon(false)
    }

    function handleGoogle(){
      setReactBd(false);
      setGoogle(true)
      setApple(false)
      setSplash(false)
      setAmazon(false)
    }

    function handleApple(){
      setReactBd(false);
      setGoogle(false)
      setApple(true)
      setSplash(false)
      setAmazon(false)
    }

    function handleSplash(){
      setReactBd(false);
      setGoogle(false)
      setApple(false)
      setSplash(true)
      setAmazon(false)
    }

    function handleAmazon(){
      setReactBd(false);
      setGoogle(false)
      setApple(false)
      setSplash(false)
      setAmazon(true)
    }

  return (
    <section 
      id="experience" 
      className="max-w-containerXs mx-auto py-10 lgl:py-24 px-4">
        <SectionTitle titleSection="Where I have Worked" number="02"/>
        <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
          <ul className="md:w-32 flex flex-col">
            <li 
              onClick={handleReactbd} 
              className={`
              ${workReactBd 
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
              } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer 
              duration-300 px-8 font-medium`}>
                ReactDB
            </li>
            <li 
              onClick={handleGoogle} 
              className={`
              ${workGoogle 
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
              } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer 
              duration-300 px-8 font-medium`}>
                Google
            </li>
            <li 
              onClick={handleApple}
              className={`
              ${workApple 
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
              } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer 
              duration-300 px-8 font-medium`}>
                Apple
            </li>
            <li 
              onClick={handleSplash} 
              className={`
              ${workSplash 
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
              } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer 
              duration-300 px-8 font-medium`}>
                Splash
            </li>
            <li 
              onClick={handleAmazon} 
              className={`
              ${workAmazon 
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
              } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer 
              duration-300 px-8 font-medium`}>
                Amazon
            </li>
          </ul>
          {workReactBd && <ReactBD/>}
          {workGoogle && <Google/>}
          {workApple && <Apple/>}
          {workSplash && <Splash/>}
          {workAmazon && <Amazon/>}
        </div>  
    </section>
  )
}
 
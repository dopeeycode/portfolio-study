import { motion } from "framer-motion"
import SectionTitle from "./SectionTitle"

import { AiFillThunderbolt } from 'react-icons/ai'

export default function About () {
  return (
    <section 
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
        <SectionTitle 
          titleSection={'About Me'} 
          number={'01'}
        />
        <div className="flex flex-col lgl:flex-row gap-16">
          <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
            <p>
              Hello! My name is Noor Mohammad and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing custom 
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot about 
              HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I had the privilege of working at an advertising agency, a start-up,
              <span className="text-textGreen"> a huge corporation, and a student-led design studio.</span> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem accusantium fugiat veritatis, 
              quidem repellat <span className="text-textGreen"> ab natus possimus? Sint, accusamus! </span>
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ullam eligendi dolorum nostrum 
              possimus quos iusto magnam ut esse recusandae
            </p>
            <p>
              Here are a few technologies I have been working with recently:
            </p>
            <div className="flex gap-16 max-sm:flex-col max-sm:gap-10">
              <div className="flex flex-col gap-2">
                <span className="text-sm flex items-center gap-2">
                  <AiFillThunderbolt className="fill-textGreen"/>
                  Javascript (ES6+)
                </span>
                <span className="text-sm flex items-center gap-2">
                  <AiFillThunderbolt className="fill-textGreen"/>
                  React
                </span>
                <span className="text-sm flex items-center gap-2">
                  <AiFillThunderbolt className="fill-textGreen"/>
                  TypeScript
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm flex items-center gap-2">
                  <AiFillThunderbolt className="fill-textGreen"/>
                  Next
                </span>
                <span className="text-sm flex items-center gap-2">
                  <AiFillThunderbolt className="fill-textGreen"/>
                  Tailwind CSS
                </span>
                <span className="text-sm flex items-center gap-2">
                  <AiFillThunderbolt className="fill-textGreen"/>
                  Framer Motion
                </span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
    </section>
  )
}


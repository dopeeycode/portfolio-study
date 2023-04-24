import { motion } from "framer-motion"
import SectionTitle from "./SectionTitle"

export default function About () {
  return (
    <section 
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
        <SectionTitle 
          titleSection={'About Me'} 
          number={'01'}
        />
    </section>
  )
}


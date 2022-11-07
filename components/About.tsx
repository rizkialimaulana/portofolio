import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div className="h-full flex items-center justify-center animate-ltr-linear-infinite bg-fixed bg-center bg-[url('/bg.jpg')] text-white">
      <div className='w-full h-full relative z-0 bg-gradient-to-t from-black via-transparent to-black'/>
      <motion.div
        className="flex flex-col items-center justify-center space-y-10 absolute z-10"
      >
        <motion.h1 className="uppercase text-xl md:text-4xl font-bold font-Stretch">
          My little story
        </motion.h1>
        <motion.p className="text-xl font-Louis w-[90%] md:w-[50%] text-justify p-4 backdrop-blur-lg">
          I'm Rizki Ali Maulana. Just call me Rizki. An Undergraduate from
          Universitas Komputer Indonesia. Addicted with Web Programming for
          about 4 years. Really love to design that implemented into
          programming.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default About
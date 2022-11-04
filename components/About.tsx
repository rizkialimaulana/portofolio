import { useTransform, useViewportScroll, motion } from 'framer-motion';
import React from 'react'

type Props = {}

const About = (props: Props) => {
   const { scrollY } = useViewportScroll();
   const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
   const y2 = useTransform(scrollY, [0, 300], [0, -100]);

   const variants = {
     visible: { opacity: 1, scale: 1, y: 0 },
     hidden: {
       opacity: 0,
       scale: 0.65,
       y: 50,
     },
   };
  return (
    <motion.div className="h-full animate-ltr-linear-infinite bg-fixed bg-center bg-[url('/bg.jpg')] p-4 text-white">
      <motion.div
        style={{ y: y1 }}
        className="flex flex-col items-center justify-center space-y-10"
      >
        <motion.h1 className="uppercase text-xl md:text-4xl font-bold font-Stretch text-[#5eff00]">
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
import React from 'react'
import { FaReact, FaNodeJs, FaLaravel, FaSass } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiPostman
} from "react-icons/si";

type Props = {}

const Skills = (props: Props) => {
  return (
    <div className="h-screen bg-black text-white flex flex-col items-center space-y-10 justify-center">
      <h1 className='font-Conthrax text-4xl tracking-[10px]'>SKILLS</h1>
      <div className='flex items-center space-x-5 flex-wrap text-3xl md:text-7xl'>
        <FaLaravel />
        <FaReact />
        <SiNextdotjs />
        <SiRedux />
        <FaNodeJs />
        <FaSass />
        <SiTailwindcss />
        <SiMongodb />
      </div>
    </div>
  );
}

export default Skills
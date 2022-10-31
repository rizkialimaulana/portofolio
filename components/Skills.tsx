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
import { GrMysql } from "react-icons/gr";

type Props = {}

const Skills = (props: Props) => {
  return (
    <div className="h-full bg-black text-white flex flex-col items-center justify-center">
      <div className="flex w-full h-full mt-5">
        <div className="flex-1 md:flex-[0.5] p-4">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-Conthrax">Skiils</h1>
            <div className="my-5 border border-gray-500 w-[20rem] md:w-[40rem]" />
            <p>Here's my skills that i got from self learning</p>
            <div className="flex flex-col space-y-5 mt-2 ">
              <div className="flex flex-row space-x-12">
                <span className="p-2 bg-gray-500/30 h-fit">2022</span>
                <div className="flex flex-col space-y-3 p-2 font-Barcelona">
                  <span className='text-blue-500 font-bold text-lg'>Full-Stack</span>
                  <ul className="list-disc">
                    <li>Learning RESTful API Web Application</li>
                    <li>Learning MERN Stack Web Application</li>
                    <li>Learn NodeJS</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row space-x-12">
                <span className="p-2 bg-gray-500/30 h-fit">2021</span>
                <div className="flex flex-col space-y-3 p-2 font-Barcelona">
                  <span className='text-blue-500 font-bold text-lg'>Frontend Development</span>
                  <ul className="list-disc">
                    <li>Get Deeper in ReactJS</li>
                    <li>Get to know ReactJS and VueJS</li>
                    <li>Learn Javascript</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row space-x-12">
                <span className="p-2 bg-gray-500/30 h-fit">2020</span>
                <div className="flex flex-col space-y-3 p-2 font-Barcelona">
                  <span className='text-blue-500 font-bold text-lg'>Backend Development</span>
                  <ul className="list-disc">
                    <li>Get Deeper in Laravel</li>
                    <li>Build my Final Assessment using Laravel</li>
                    <li>Learn The Fundamentals of Laravel</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row space-x-12">
                <span className="p-2 bg-gray-500/30 h-fit">2017</span>
                <div className="flex flex-col space-y-3 p-2 font-Barcelona">
                  <span className='text-blue-500 font-bold text-lg'>Fundamentals</span>
                  <ul className="list-disc">
                    <li>Learn The Fundamentals of HTML, PHP, and CSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex-[0.5] md:grid md:grid-cols-3 h-[90%] bg-fixed p-5 mt-10 bg-[url('/bg2.png')] bg-contain text-[#ff00f2] items-center justify-center">
          <FaReact className="w-20 h-20 p-2 rounded-full bg-transparent transition-all hover:bg-white hover:text-blue-500" />
          <SiNextdotjs className="w-20 h-20 p-2 rounded-full bg-transparent transition-all hover:bg-white hover:text-black" />
          <FaNodeJs className="w-20 h-20 p-2 rounded-full bg-transparent transition-all hover:bg-white hover:text-[#0faf00]" />
          <SiExpress className="w-20 h-20 p-2 rounded-full bg-transparent transition-all hover:bg-white hover:text-black" />
          <SiRedux className="w-20 h-20 p-2 rounded-full bg-transparent transition-all hover:bg-white hover:text-[#a200ff]" />
          <FaLaravel className="w-20 h-20 p-2 rounded-full bg-transparent transition-all hover:bg-white hover:text-red-600" />
          <SiTailwindcss className="w-20 h-20 p-2 rounded-full bg-transparent transition-all hover:bg-white hover:text-[#003cff]" />
          <FaSass className="w-20 h-20 p-2 rounded-full bg-transparent transition-all hover:bg-white" />
          <SiMongodb className="w-20 h-20 p-2 rounded-full bg-transparent transition-all hover:bg-white hover:text-[#33862c]" />
          <GrMysql className="w-20 h-20 p-2 rounded-full bg-transparent transition-all hover:bg-white hover:text-[#006eff]" />
          <SiPostman className="w-20 h-20 p-2 rounded-full bg-transparent transition-all hover:bg-white hover:text-[#ff9100]" />
        </div>
      </div>
    </div>
  );
}

export default Skills
import Image from 'next/image'
import React from 'react'
import { CgScrollV } from "react-icons/cg";

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='h-screen flex flex-col bg-gray-500/30 bg-fixed items-center overflow-hidden justify-center'>
      <h1 className='font-Stretch text-left w-full px-8 md:px-16 text-xl'>PORTOFOLIOO</h1>
      <Image
        src="/profile-removebg.png"
        alt=""
        width={450}
        height={300}
        className="relative w-[25rem] h-auto"
      />
      <div className="absolute z-10 flex h-full items-end justify-between w-full px-8 md:px-16 pb-20">
        <h1 className="text-4xl md:text-8xl font-Conthrax text-white">
          Rizki Ali Maulana
        </h1>
        <div className="flex flex-col items-start text-lg md:text-3xl font-Stretch text-white">
          <span>Frontend Developer</span>
          <span>QA Engineer</span>
          <span>Freelancer</span>
        </div>
      </div>
      <div className="h-full w-full absolute z-1 bg-gradient-to-b from-transparent via-transparent to-black" />
    </div>
  );
}

export default Header
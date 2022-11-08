import Image from 'next/image'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="h-screen flex flex-col bg-gray-300/30 bg-fixed items-center overflow-hidden justify-center">
      <Image
        src="/profile-removebg.png"
        alt=""
        width={450}
        height={300}
        className="relative w-[25rem] h-auto opacity-[0.8] md:opacity-1"
      />
      <div className="w-full h-screen absolute z-10 md:px-16 px-8 py-5 md:py-14 flex flex-col items-start justify-between">
        <h1 className="font-Stretch text-left text-xl">
          PORTOFOLIOO
        </h1>
        <div className="md:flex items-center justify-between">
          <h1 className="text-4xl md:text-8xl font-Conthrax text-white">
            Rizki Ali Maulana
          </h1>
          <div className="flex flex-col items-start text-lg md:text-3xl font-Stretch text-white">
            <span>Frontend Developer</span>
            <span>QA Engineer</span>
            <span>Freelancer</span>
          </div>
        </div>
      </div>
      <div className="h-screen w-full absolute z-1 bg-gradient-to-b from-transparent via-transparent to-black" />
    </div>
  );
}

export default Header
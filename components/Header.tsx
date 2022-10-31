import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="relative border-2 border-black" />
      <div className="h-full absolute flex items-center justify-center">
        <div className="flex flex-col items-start space-y-2 tracking-[10px] font-Stretch font-bold uppercase text-4xl md:text-[7rem]">
          <h1>Rizki</h1>
          <div className="flex flex-row space-x-5">
            <h1 className="">Ali</h1>
            <div className="font-Conthrax flex flex-col items-center text-xs md:text-5xl text-[#49c2fa]">
              <span>Web Developer</span>
              <span>QA Engineer</span>
              <span>Freelancer</span>
            </div>
          </div>
          <h1 className="md:text-stroke-2 text-stroke-2 text-fill-transparent text-stroke-white">
            Maulana
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header
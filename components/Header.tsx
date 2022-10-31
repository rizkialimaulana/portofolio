import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="h-screen bg-fixed flex items-center justify-center bg-black text-white">
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col items-start md:space-y-12 tracking-[10px] font-Stretch font-bold uppercase text-3xl md:text-[7rem]">
          <h1>Rizki</h1>
          <div className="flex flex-row space-x-5 items-center">
            <h1 className="text-[#15ff00]">Ali</h1>
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
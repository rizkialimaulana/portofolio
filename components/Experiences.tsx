import Image from 'next/image'
import React from 'react'
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi'

type Props = {}

const Experiences = (props: Props) => {
  return (
    <div className='h-fit md:h-screen bg-fixed p-6 text-black flex flex-col items-center justify-center'>
      <h1 className="font-Stretch uppercase text-4xl md:text-6xl">projects</h1>
      <div className='mt-5 w-full flex items-center justify-between'>
          <button><HiArrowCircleLeft className='w-16 h-16 md:inline-flex hidden'/></button>
        <div className="flex md:flex-row md:space-x-5 md:space-y-0 space-y-5 flex-col">
          <div className="w-full h-[30rem] backdrop-blur-lg p-4 flex items-center justify-center">
            <Image src='/demo.png' alt="netflix-demo" width={800} height={800}/>
          </div>
        </div>
          <button><HiArrowCircleRight className='w-16 h-16 md:inline-flex hidden'/></button>
      </div>
    </div>
  );
}

export default Experiences
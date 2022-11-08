import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi'

type Props = {}

const Experiences = (props: Props) => {
  return (
    <div className="h-screen md:h-screen bg-fixed p-6 text-black flex flex-col items-center justify-center">
      <h1 className="font-Stretch uppercase text-4xl md:text-6xl">projects</h1>
      <div className="mt-5 w-full flex items-center justify-between">
        <button>
          <HiArrowCircleLeft className="w-16 h-16 md:inline-flex hidden" />
        </button>
        <div className="flex md:flex-row md:space-x-5 md:space-y-0 space-y-5 flex-col">
          <div className="group relative w-full h-[30rem] backdrop-blur-lg p-4 flex items-center justify-center">
            <Image
              src="/demo.png"
              alt="netflix-demo"
              width={800}
              height={800}
              className="transition duration-[450ms] ease-in-out group-hover:opacity-[0.6]"
            />
            <div className="opacity-0 group-hover:opacity-80 duration-[450ms] absolute flex flex-col items-center space-y-5">
              <Link href='https://netflix-clone-rizkialimaulana.vercel.app'>
                <h1 className="text-xl md:text-5xl font-Conthrax font-bold cursor-pointer">
                  NETFLIX CLONE
                </h1>
              </Link>
            </div>
          </div>
        </div>
        <button>
          <HiArrowCircleRight className="w-16 h-16 md:inline-flex hidden" />
        </button>
      </div>
    </div>
  );
}

export default Experiences
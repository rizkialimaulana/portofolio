import Link from 'next/link'
import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiRedux, SiFirebase, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

type Props = {}

const Experiences = (props: Props) => {
  return (
    <div className='h-fit md:h-screen animate-ltr-linear-infinite bg-[url("/bg3.jpg")] bg-fixed p-6 text-white flex flex-col items-center justify-center'>
      <h1 className="font-Stretch uppercase text-4xl md:text-6xl">projects</h1>
      <div className="mt-5 flex md:flex-row md:space-x-5 md:space-y-0 space-y-5 flex-col">
        <div className="w-[25rem] h-[30rem] border border-gray-600 backdrop-blur-lg p-4 space-y-4 flex flex-col items-center justify-center">
          <h1 className="font-Conthrax text-xl">
            Study Case : Netflix
          </h1>
          <div className="flex flex-row items-center space-x-3 text-lg">
            <FaReact className="text-3xl" />
            <SiRedux className="text-3xl" />
            <SiFirebase className="text-3xl" />
            <SiTailwindcss className="text-3xl" />
          </div>
          <p className="font-Louis">
            Netflix is a digital media streaming service provider, headquartered
            in Los Gatos, California. founded in 2008 by Reed Hasting and Marc
            Randolph in Scotts Valley, California. The company's main business
            is a subscription streaming service that offers movies and
            television programming, including some created by Netflix itself.
          </p>
          <Link href="https://netflix-clone-mu-pied.vercel.app/">
            <span className="py-2 px-4 border border-[#73ff00] transition-all hover:bg-[#73ff00]">
              Try Demo
            </span>
          </Link>
        </div>
        <div className="w-[25rem] h-[30rem] border border-gray-600 backdrop-blur-lg p-4 space-y-4 flex flex-col items-center justify-center">
          <h1 className="font-Conthrax text-xl">
            Study Case : Airbnb
          </h1>
          <div className="flex flex-row items-center space-x-3 text-lg">
            <SiNextdotjs className="text-3xl" />
            <FaReact className="text-3xl" />
            <SiTailwindcss className="text-3xl" />
          </div>
          <p className="font-Louis">
            Airbnb is a peer-to-peer online marketplace and home stay network
            that allows users to list or rent properties for short-term use. The
            rental price is determined by the property owner. Airbnb receives a
            portion of the bookkeeping fee from guests and hosts. Today, Airbnb
            covers 2,000,000 properties in 34,000 cities and 191 countries.
            Airbnb was founded in August 2008 and is headquartered in San
            Francisco, California. This company is owned and operated privately.
          </p>
          <Link href="https://airbnb-clone-one-liart.vercel.app/">
            <span className="py-2 px-4 border border-[#73ff00] transition-all hover:bg-[#73ff00]">
              Try Demo
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Experiences
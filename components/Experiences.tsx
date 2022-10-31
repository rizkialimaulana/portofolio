import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Experiences = (props: Props) => {
  return (
    <div className='h-fit md:h-screen bg-[url("/bg3.jpg")] bg-fixed p-6 text-white flex flex-col items-center justify-center'>
      <h1 className="font-Stretch uppercase text-4xl md:text-6xl">projects</h1>
      <div className="mt-5 flex md:flex-row md:space-x-5 space-y-5 flex-col">
        <div className="w-[25rem] h-[30rem] backdrop-blur-lg p-4 space-y-4 flex flex-col items-center justify-center">
          <h1 className="font-Conthrax text-xl text-blue-400">
            Study Case : Shopee
          </h1>
          <p className="font-Louis">
            Shopee is a commercial electronic website headquartered in Singapore
            owned by Sea Limited (formerly known as Garena), which was founded
            in 2009 by Forrest Li. Shopee was first launched in Singapore in
            2015, and has since expanded to Malaysia, Thailand, Taiwan,
            Indonesia, Vietnam and the Philippines. Starting in 2019, Shopee has
            also been active in Brazil, the first country in South America and
            outside Asia that Shopee visited.
          </p>
          <Link href="https://shopee-clone-d2bjxa2mv-rizkialimaulana.vercel.app/">
            <span className="py-2 px-4 border border-[#73ff00] transition-all hover:bg-[#73ff00]">Try Demo</span>
          </Link>
        </div>
        <div className="w-[25rem] h-[30rem] backdrop-blur-lg p-4 space-y-4 flex flex-col items-center justify-center">
          <h1 className="font-Conthrax text-xl text-blue-400">
            Study Case : Deliveroo
          </h1>
          <p className="font-Louis">
            Deliveroo is a British online food delivery company formed by Will
            Shu and Greg Orlowski in 2013 in London, England. The company
            operates in more than two hundred locations in the United Kingdom,
            the Netherlands, France, Belgium, Ireland, Italy, Australia,
            Singapore, Hong Kong, United Arab Emirates and Kuwait.
          </p>
          <Link href="https://shopee-clone-d2bjxa2mv-rizkialimaulana.vercel.app/">
            <span className="py-2 px-4 border border-[#73ff00] transition-all hover:bg-[#73ff00]">
              Try Demo
            </span>
          </Link>
        </div>
        <div className="w-[25rem] h-[30rem] backdrop-blur-lg p-4 space-y-4 flex flex-col items-center justify-center">
          <h1 className="font-Conthrax text-xl text-blue-400">
            Study Case : Airbnb
          </h1>
          <p className='font-Louis'>
            Airbnb is a peer-to-peer online marketplace and home stay network
            that allows users to list or rent properties for short-term use. The
            rental price is determined by the property owner. Airbnb receives a
            portion of the bookkeeping fee from guests and hosts. Today, Airbnb
            covers 2,000,000 properties in 34,000 cities and 191 countries.
            Airbnb was founded in August 2008 and is headquartered in San
            Francisco, California. This company is owned and operated privately.
          </p>
          <Link href="https://airbnb-clone-one-liart.vercel.app/">
            <span className="py-2 px-4 border border-[#73ff00] transition-all hover:bg-[#73ff00]">Try Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Experiences
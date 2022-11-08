import Link from 'next/link'
import React from 'react'
import { FaGithub, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

type Props = {}

const Contact = (props: Props) => {
    const github = 'https://github.com/rizkialimaulana'
    const linkedin = 'https://www.linkedin.com/in/rizkialimaulana'
    const twitter = 'https://www.twitter.com/rizkialim1807'
    const instagram = 'https://www.instagram.com/rzkalim'
    const facebook = "https://www.facebook.com/profile.php?id=100067136898600";
  return (
    <div className="h-screen flex flex-col items-start space-y-10 justify-center p-10 bg-black text-white">
      <div className='flex flex-col md:space-y-12'>
        <h1 className="text-4xl md:text-[7rem] font-Stretch uppercase">
          ANY
        </h1>
        <h1 className="text-4xl md:text-[7rem] font-Stretch uppercase">
          PROJECT
        </h1>
        <h1 className="text-4xl md:text-[7rem] font-Stretch uppercase">
          IN MIND?
        </h1>
        <h1 className="text-4xl md:text-[7rem] cursor-pointer font-Stretch uppercase text-[#66ff00]">
          GET IN TOUCH
        </h1>
      </div>
      <div className="flex flex-col space-y-2">
        <span className="text-lg md:text-xl font-thin">
          Get in touch with my social media :
        </span>
        <div className="flex flex-row items-center space-x-4 text-[3rem]">
          <Link href={facebook}>
            <FaFacebook className="cursor-pointer transition-all pb-2 border-b-2 border-transparent hover:border-[#66ff00]" />
          </Link>
          <Link href={github}>
            <FaGithub className="cursor-pointer transition-all pb-2 border-b-2 border-transparent hover:border-[#66ff00]" />
          </Link>
          <Link href={twitter}>
            <FaTwitter className="cursor-pointer transition-all pb-2 border-b-2 border-transparent hover:border-[#66ff00]" />
          </Link>
          <Link href={instagram}>
            <FaInstagram className="cursor-pointer transition-all pb-2 border-b-2 border-transparent hover:border-[#66ff00]" />
          </Link>
          <Link href={linkedin}>
            <FaLinkedin className="cursor-pointer transition-all pb-2 border-b-2 border-transparent hover:border-[#66ff00]"/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact
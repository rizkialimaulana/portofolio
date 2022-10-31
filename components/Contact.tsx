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
    <div className="h-screen flex flex-col items-center space-y-6 justify-center bg-black text-white">
      <h1 className="text-4xl md:text-7xl cursor-pointer font-Stretch uppercase transition-colors hover:text-[#66ff00]">
        Lets Talk!
      </h1>
      <div className="flex flex-col items-center space-y-4">
        <span className="text-xl md:text-3xl ">
          Get in touch with my social media
        </span>
        <div className="flex flex-row items-center space-x-4 text-[2rem]">
          <Link href={facebook}>
            <FaFacebook className="cursor-pointer" />
          </Link>
          <Link href={github}>
            <FaGithub className="cursor-pointer" />
          </Link>
          <Link href={twitter}>
            <FaTwitter className="cursor-pointer" />
          </Link>
          <Link href={instagram}>
            <FaInstagram className="cursor-pointer" />
          </Link>
          <Link href={linkedin}>
            <FaLinkedin className="cursor-pointer"/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="h-[20rem] bg-fixed bg-center bg-[url('/bg.jpg')] p-4 flex flex-col items-center justify-center space-y-10 text-[#5eff00]">
      <h1 className="uppercase text-xl md:text-4xl font-bold font-Stretch">
        My little story
      </h1>
      <p className="text-xl font-Louis font-bold w-[90%] md:w-[50%] text-justify p-4 bg-gray-500/70">
        I'm Rizki Ali Maulana. Just call me Rizki. An Undergraduate from
        Universitas Komputer Indonesia. Addicted with Web Programming for about
        4 years. Really love to design that implemented into programming.
      </p>
    </div>
  );
}

export default About
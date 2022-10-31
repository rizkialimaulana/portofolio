import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="h-[20rem] bg-fixed bg-center bg-[url('/bg.jpg')] p-4 text-white flex flex-col items-center justify-center space-y-10">
      <h1 className="uppercase text-xl md:text-4xl font-bold font-Stretch text-[#5eff00]">
        My little story
      </h1>
      <p className="text-xl font-Louis w-[90%] md:w-[50%] text-justify p-4 backdrop-blur-lg">
        I'm Rizki Ali Maulana. Just call me Rizki. An Undergraduate from
        Universitas Komputer Indonesia. Addicted with Web Programming for about
        4 years. Really love to design that implemented into programming.
      </p>
    </div>
  );
}

export default About
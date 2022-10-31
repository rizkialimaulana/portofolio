import Image from 'next/image'
import React from 'react'

type Props = {}

const Experiences = (props: Props) => {
  return (
    <div className='h-screen bg-black text-white p-4'>
        <h1>Experiences</h1>
        <div className='flex flex-col overflow-y-scroll w-[70%] h-auto border border-gray-500 p-2'>
            <div className='flex flex-col items-center justify-between'>
                <Image src='/bg.jpg' alt='' width={20} height={20} className='object-cover rounded-full'/>
            </div>
        </div>
    </div>
  )
}

export default Experiences
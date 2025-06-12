import { barImg } from '@/app/assets'
import Image from 'next/image'
import React from 'react'

export default function BarSection() {
  return (
    <div className='w-full m-auto text-secondaryTextColor p-3 ' >
        <div className='max-w-[1200px] w-full flex m-auto justify-center gap-10 items-center text-center max-700:flex-col'>
            <div className='max-w-[650px] w-full flex justify-center item-center  '>
                <Image src={barImg} alt='barImg' width={660} height={750} className='max-700:max-w-[400px] ' />
            </div>
            <div className='min-h-[700px] max-w-[700px] w-full flex flex-col items-center justify-center gap-5 p-5 max-700:min-h-[250px] max-400:p-0'>
                  <h2 className='text-[40px] font-normal max-400:text-[32px]'>Bars</h2>
                  <p className='text-[17px] font-light max-w-[400px] w-full max-850:text-sm'>Tucked into the heart of the hotel, our bar is a cozy gathering place. Step into our stylish billiard corner, where friendly competition meets laid-back vibes. This area adds an interactive, energetic dimension to the bar experience. </p>
            </div>
        </div>
    </div>
  )
}

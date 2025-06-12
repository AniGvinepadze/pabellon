import { barImg } from '@/app/assets'
import Image from 'next/image'
import React from 'react'

export default function BarSection() {
  return (
    <div className='w-full m-auto text-secondaryTextColor  ' >
        <div className='max-w-[1200px] w-full flex m-auto justify-center gap-10 items-center text-center'>
            <div className='max-w-[650px] w-full'>
                <Image src={barImg} alt='barImg' width={660} height={750}  />
            </div>
            <div className='min-h-[700px] max-w-[500px] w-full flex flex-col items-center justify-center '>
                  <h2 className='text-[40px] font-normal'>Bars</h2>
                  <p className='text-[17px] font-light'>Tucked into the heart of the hotel, our bar is a cozy gathering place. Step into our stylish billiard corner, where friendly competition meets laid-back vibes. This area adds an interactive, energetic dimension to the bar experience. </p>
            </div>
        </div>
    </div>
  )
}

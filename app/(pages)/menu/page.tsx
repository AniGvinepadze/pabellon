import Image from 'next/image'
import React from 'react'
import menu from "../../../public/assets/Screenshot 2025-07-05 200049.png";

export default function Menu() {
  return (
    <div className='max-w-[3600px] w-full m-auto'>
        <Image src={menu} alt='menu' width={3600} height={2000} className='object-cover max-w-[3600px] w-full'/>
    </div>
  )
}

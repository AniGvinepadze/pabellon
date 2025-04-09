import Image from 'next/image'
import React from 'react'
import logo from "../../public/assets/logo.svg"
import { navbar } from '..'
import glovabIcon from "../../public/assets/image 2 (2).svg"
import Link from 'next/link'
export default function Header() {
  return (
    <div className='max-w-[1600px] w-full m-auto p-3 flex justify-between items-center'>
     <Link href="/home" className='hover:scale-110 transition-all ease-in-out duration-300'>
     <Image src={logo} alt='logo' width={300} height={90} className='max-w-[300px] w-full object-contain'/>
     </Link>
     <div className='flex gap-6 mt-1 max-1000:hidden'>
        <div className='flex gap-7 items-center mt-4' >
           {navbar.map((e)=>(
            <Link href={e.route} key={e.id} className='max-w-[700px] w-full hover:scale-110 transition-all ease-in-out duration-300'>
              <p className='text-xl font-medium'>{e.title} </p>
            </Link>
           ))}
        </div>
        <div className='hover:scale-110 transition-all ease-in-out duration-300 mt-4'>
            <Image src={glovabIcon} alt='globalIcon ' width={43} height={43} className="cursor-pointer"/>
        </div>
     </div>
     
    </div>
  )
}

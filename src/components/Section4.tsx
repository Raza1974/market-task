import React from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Section4() {
  return (
    <div>
      <div className='md:w-screen flex md:h-[682px]'>
        <div className=' w-full p-10  md:p-0 h-full md:flex'>
        <div className="left md:w-3/5 flex justify-end items-end">
        <Image src={"/images/img17.svg"} alt='hero image' width={704} height={682}></Image>
        </div>
        <div className="right flex flex-col justify-center gap-10 h-full md:w-2/5">
        <p className='font-bold  text-[#BDBDBD]'>SUMMER 2020</p>
        <h1 className='font-bold w-[375px] text-[40px] text-[#252B42]'>Part of the Neural 
        Universe</h1>
        <p className='text-[20px] w-[375px] text-[#737373] '>We know how large objects will act, 
        but things on a small scale.</p>
        <div className="btn flex gap-3">
          <Link href={"/shop"}>
        <Button className='font-bold text-[24px]w-[156px] h-[52px] bg-[#2DC071] '>BUY NOW</Button>
          </Link>
          <Link href={"/about"}>
        <Button className='font-bold text-[24px]w-[173px] h-[52px] bg-transparent border-[1px] rounded border-[#2DC071] text-[#2DC071]  '>READ MORE</Button>
          </Link>
        </div>

        </div>
        </div>

      </div>
    </div>
  )
}


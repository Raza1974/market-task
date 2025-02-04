import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Section18() {
  return (
    <div>
      <div className='md:w-screen  md:flex md:h-[636px]'>
        <div className='md:w-2/3 md:h-[520px] flex flex-col justify-center p-10 md:p-0 items-center text-white bg-[#2A7CC7]'>
        <div className='lg:w-[436px] flex flex-col  gap-5 lg:h-[238px]'>
            <h1 className='font-bold'>WORK WITH US</h1>
            <h1 className='font-bold text-[40px]'>Now Lets grow Yours</h1>
            <p>The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
            <Link href={"/contact"}>
            <Button className='font-bold bg-transparent border-white border-[1px] rounded  w-[117px] h-[52px] "> '>Button</Button>
            </Link>


        </div>

        </div>
        <div className='md:w-1/3 md:h-[640px]'>
        <Image src={"/images/img82.svg"} alt='hero image' width={590} height={640}></Image>

        </div>

      </div>
    </div>
  )
}

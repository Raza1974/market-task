import React from 'react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link";

export default function Section3() {
  return (
    <div>
      <div className='md:w-screen md:h-[711px] flex justify-center items-end bg-[url("/images/img15.svg")]'>
      <div className='md:w-[1049px] grid gap-10 md:gap-0 p-10 md:p-0 overflow-hidden md:flex  text-white md:h-[599px]'>
        <div className="left flex flex-col gap-4 md:gap-[30px] md:w-1/2 justify-center md:justify-start md:items-start items-center md:h-[685px]">
<p className='text-[20px] '>SUMMER 2020</p>
<h1 className='font-bold text-[40px] md:text-[58px] text-center md:text-start '>Vita Classic Product</h1>
<p className=' w-[341px] text-center md:text-start'>We know how large objects will act, We know how are objects will act, We know</p>
<div className=' flex gap-4 items-center'>
    <p className='font-bold text-[24px] '>$16.48</p>
    <Link href={"/cart"}>
    <Button className='font-bold text-[24px]w-[184px] h-[52px] bg-[#2DC071] '>ADD TO CART</Button>
            
              </Link>

</div>
        </div>
        <div className="right md:w-1/2 md:h-[685px]">
        <Image src={"/images/img16.svg"} alt='hero image' width={510} height={685}></Image>

        </div>


      </div>

      </div>
    </div>
  )
}


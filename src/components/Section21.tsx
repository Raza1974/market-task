import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Section21() {
  return (
    <div className='flex justify-center items-center'>
      <div className=' w-[1050px] h-[348px] flex flex-col justify-center items-center gap-5'>
        <h1 className=' text-[#252B42] font-bold'>WE Cant WAIT TO MEET YOU</h1>
        <p className='font-bold text-[#252B42] text-[58px]'>Lets Talk</p>
        <Link href={"/shop"}>
        <Button className='font-bold bg-[#23A6F0]  w-[186px] h-[52px] "> '>Try it free now</Button>
              </Link>

      </div>
    </div>
  )
}

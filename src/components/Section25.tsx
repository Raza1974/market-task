import React from 'react'
import { Button } from "@/components/ui/button"

export default function Section25() {
  return (
    <div>
      <div className='w-screen h-[582px] flex justify-center items-center'>
        <div className='w-[607px] flex flex-col justify-center items-center gap-10 h-[282px]'>
            <h1 className='text-[40px] text-center lg:text-start text-[#252B42] font-bold'>Start your 14 days free trial</h1>
            <p className='font-bold text-center'>Met minim Mollie non desert Alamo est sit cliquey dolor 
            do met sent. RELIT official consequent.</p>
            <Button className='font-bold bg-[#23A6F0]  w-[186px] h-[52px] "> '>Try it free now</Button>

            <div className="icons flex gap-3">
            <i className='bx  text-2xl bxl-facebook-circle'  ></i>
                <i className='bx  text-2xl bxl-instagram'></i>
                <i className='bx  text-2xl bxl-twitter'  ></i>
                <i className='bx  text-2xl bxl-linkedin'></i>

            </div>


        </div>

      </div>
    </div>
  )
}

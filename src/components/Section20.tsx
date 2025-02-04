import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
export default function Section20() {
  return (
    <div>
      <div className='lg:w-screen  lg:h-[814px] flex justify-center items-center'>
        <div className='lg:w-[1050px] mt-20 lg:mt-0 flex flex-col gap-16 justify-center items-center
         lg:h-full '>
            <div className=' flex justify-center items-center'>
            <div className='lg:w-[625px] text-center'>
                <p className='font-bold  text-[#252B42]'>VISIT OUR OFFICE</p>
                <h1 className='font-bold lg:text-[40px] text-[24px]   text-[#252B42]  '>We help small businesses 
                with big ideas</h1>
            </div>
            </div>
            <div className='lg:w-[985px] grid lg:grid-cols-3 lg:h-[403px] gap-20 lg:gap-0 '>
                <div className="box flex flex-col justify-center items-center gap-5 w-[327px] h-full">
                    <div className='w-full h-full flex flex-col justify-center items-center gap-5 '>
                        <div className="icon">
                        <i className='bx bx-phone text-8xl text-[#23A6F0] '></i>
                        </div>
                        <p className='font-bold text-[14px] '>georgia.young@example.com</p>
                        <p className='font-bold text-[14px] '>georgia.young@ple.com</p>
                        <p className='font-bold text-[16px] '>Get Support</p>
                        <div className="btn">
                        <Link href={"/contact#contact"}>
                        <Button className='font-bold bg-transparent border-[#23A6F0] text-[#23A6F0] rounded-3xl border-[1px]  w-[189px] h-[54px] "> '>Submit Request</Button>
                        </Link>
                        </div>

                    
                    </div>

                </div>
                <div className="box bg-[#252B42] text-white flex flex-col justify-center items-center gap-5 w-[327px] p-4 lg:p-0 h-full">
                    <div className='w-full h-full flex flex-col justify-center items-center gap-5'>
                        <div className="icon">
                        <i className='bx bx-current-location text-8xl text-[#23A6F0]'></i>
                        </div>
                        <p className='font-bold text-[14px] '>georgia.young@example.com</p>
                        <p className='font-bold text-[14px] '>georgia.young@ple.com</p>
                        <p className='font-bold text-[16px] '>Get Support</p>
                        <div className="btn">
                        <Link href={"/contact#contact"}>
                        <Button className='font-bold bg-transparent border-[#23A6F0] text-[#23A6F0] rounded-3xl border-[1px]  w-[189px] h-[54px] "> '>Submit Request</Button>
                        </Link>
                        </div>

                    
                    </div>

                </div>
                <div className="box flex flex-col justify-center items-center gap-5 w-[327px] h-full">
                    <div className='w-full h-full flex flex-col justify-center items-center gap-5'>
                        <div className="icon">
                        <i className='bx bx-envelope text-8xl text-[#23A6F0]'  ></i>
                        </div>
                        <p className='font-bold text-[14px] '>georgia.young@example.com</p>
                        <p className='font-bold text-[14px] '>georgia.young@ple.com</p>
                        <p className='font-bold text-[16px] '>Get Support</p>
                        <div className="btn">
                        <Link href={"/contact#contact"}>
                        <Button className='font-bold bg-transparent border-[#23A6F0] text-[#23A6F0] rounded-3xl border-[1px]  w-[189px] h-[54px] "> '>Submit Request</Button>
                        </Link>
                        </div>

                    
                    </div>

                </div>

            </div>

        </div>

      </div>
    </div>
  )
}

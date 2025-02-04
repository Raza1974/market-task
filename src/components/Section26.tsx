import React from 'react'
import Image from "next/image"

export default function Section26() {
  return (
    <div>
     <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
      <div className="w-screen flex flex-col justify-center items-center h-[320px]">
        <div className="w-[788px] flex flex-col justify-center items-center h-[180px]">
          <h1 className="font-bold ">WHAT WE DO</h1>
          <p className="text-[#252B42] text-[40px] md:text-[58px] font-bold lg:w-full w-[400px] text-center">Innovation tailored for you</p>
          <div>
            <div className="flex">
              <h1 className=" text-[#252B42]">Home</h1>
              <i className="bx bx-chevron-right text-2xl"></i>
              <h1>Team</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen lg:h-[530px] grid lg:grid-cols-4  lg:grid-rows-2 gap-2'>
        <div className='col-span-2 row-span-2'><Image src={"/images/img86.svg"} alt='hero image' width={700} height={530}></Image></div>

        <div><Image src={"/images/img87.svg"} alt='hero image' width={361} height={260}></Image>
        </div>
        <div>
            
        <Image src={"/images/img88.svg"} alt='hero image' width={361} height={260}></Image></div>

        <div><Image src={"/images/img89.svg"} alt='hero image' width={361} height={260}></Image>
        </div>
        <div>
            
        <Image src={"/images/img90.svg"} alt='hero image' width={361} height={260}></Image></div>

      </div>
    </div>
  )
}

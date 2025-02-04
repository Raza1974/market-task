import React from 'react'
import Image from "next/image";

export default function Section16() {
  return (
    <div>
      <div className='md:w-screen flex justify-center items-center md:h-[826px]'>
        <div className='md:w-[1050px] flex flex-col gap-10 justify-center items-center md:h-[819px]'>
                <div className='w-full flex justify-center items-center'>
            <div className='w-[469px] h-[100px] '>
                <h1 className='font-bold text-center text-[40px] text-[#252B42] '>Meet Our Team</h1>
                <p className='text-center'>Problems trying to resolve the conflict between 
                the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>
            <div className='md:w-[1034px] mt-10 md:h-[383px] '>
                <div className="boxes grid md:grid-cols-3 justify-center items-center md:w-[1034px] md:h-[383px]">
                    <div className="box h-[383px]">
                    <Image src={"/images/img79.svg"} alt='hero image' width={316} height={231}></Image>
                    <div className='w-[316px] h-[152px] gap-5 flex flex-col justify-center items-center'>
                    <h1 className=' text-[#252B42] font-bold'>Username</h1>
                    <p>Profession</p>
                    <div className="links text-2xl flex gap-3 text-[#23A6F0]">
                <i className='bx bxl-facebook-circle'  ></i>
                <i className='bx bxl-instagram'></i>
                <i className='bx bxl-twitter'  ></i>
                    </div>
                
                </div>

                    </div>
                    <div className="box h-[383px]">
                    <Image src={"/images/img80.svg"} alt='hero image' width={316} height={231}></Image>
                    <div className='w-[316px] h-[152px] gap-5 flex flex-col justify-center items-center'>
                    <h1 className=' text-[#252B42] font-bold'>Username</h1>
                    <p>Profession</p>
                    <div className="links text-2xl flex gap-3 text-[#23A6F0]">
                <i className='bx bxl-facebook-circle'  ></i>
                <i className='bx bxl-instagram'></i>
                <i className='bx bxl-twitter'  ></i>
                    </div>
                
                </div>

                    </div>
                    <div className="box h-[383px]">
                    <Image src={"/images/img81.svg"} alt='hero image' width={316} height={231}></Image>
                    <div className='w-[316px] h-[152px] gap-5 flex flex-col justify-center items-center'>
                    <h1 className=' text-[#252B42] font-bold'>Username</h1>
                    <p>Profession</p>
                    <div className="links text-2xl flex gap-3 text-[#23A6F0]">
                <i className='bx bxl-facebook-circle'  ></i>
                <i className='bx bxl-instagram'></i>
                <i className='bx bxl-twitter'  ></i>
                    </div>
                
                </div>

                    </div>
                </div>

            </div>

        </div>

      </div>
    </div>
  )
}

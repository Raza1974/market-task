import React from 'react'
import Image from "next/image";

export default function Section23() {
  return (
    <div>
      <div className=' lg:w-screen flex justify-center items-center lg:h-[704px]'>
        <div className='lg:w-[985px] flex justify-center items-center lg:h-[365px]'>
            <div className="boxes lg:flex lg:h-[365px] lg:w-[985px]">
                <div className="box border-[1px] border-[#23A6F0] rounded-lg p-5 flex flex-col justify-center items-center w-[327px] h-[332px]">
                    <div className=' flex flex-col gap-5 '>
                        <h1 className='font-bold text-[24px] text-center'>FREE</h1>
                        <p>Organize across all 
                        apps by hand</p>
                        <div className='flex justify-center items-center'>
                        <span className='font-bold text-[40px] text-[#23A6F0]'>0$</span>
                        <p> Per Month</p>
                        </div>
                        <div className='flex gap-3 justify-center items-center'>
                        <Image src={"/images/img85.svg"} alt='hero image' width={32} height={32}></Image>
                            <p>Unlimited product updates
                            </p>
                        </div>
                    </div>

                </div>
                <div className="box mb-10 text-white bg-[#252B42] border-[1px] border-[#23A6F0] rounded-lg p-5 flex flex-col justify-center items-center w-[327px] h-[332px]">
                    <div className=' flex flex-col gap-5 '>
                        <h1 className='font-bold text-[24px] text-center'>STANDARD</h1>
                        <p>Organize across all 
                        apps by hand</p>
                        <div className='flex justify-center items-center'>
                        <span className='font-bold text-[40px] text-[#23A6F0]'>9.99$</span>
                        <p> Per Month</p>
                        </div>
                        <div className='flex gap-3 justify-center items-center'>
                        <Image src={"/images/img85.svg"} alt='hero image' width={32} height={32}></Image>
                            <p>Unlimited product updates
                            </p>
                        </div>
                    </div>

                </div>
                <div className="box border-[1px] border-[#23A6F0] rounded-lg p-5 flex flex-col justify-center items-center w-[327px] h-[332px]">
                    <div className=' flex flex-col gap-5 '>
                        <h1 className='font-bold text-[24px] text-center'>PREMIUM</h1>
                        <p>Organize across all 
                        apps by hand</p>
                        <div className='flex justify-center items-center'>
                        <span className='font-bold text-[40px] text-[#23A6F0]'>19.9$</span>
                        <p> Per Month</p>
                        </div>
                        <div className='flex gap-3 justify-center items-center'>
                        <Image src={"/images/img85.svg"} alt='hero image' width={32} height={32}></Image>
                            <p>Unlimited product updates
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

      </div>
    </div>
  )
}

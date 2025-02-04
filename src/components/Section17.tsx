import React from 'react'

import Image from "next/image";

export default function Section17() {
  return (
    <div>
      <div>
      <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />

       <div className='md:w-screen flex justify-center items-center md:h-[92px]'
        >
            <div className='md:w-[1049px] p-4 md:p-0 gap-5 md:h-full flex flex-col items-center'>
            <h1 className='text-[40px] text-center md:text-start font-bold text-[#252B42]'>Big Companies Are Here
            </h1>
            <p className='md:w-[547px] text-center'>Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics </p>
           </div>

        </div>

        <div className='md:w-screen md:h-[225px] mb-14 md:flex justify-center items-center'>
            <div className='md:w-[1088px] md:flex justify-center p-20 items-center md:h-full'>
                <div className="items justify-center items-center grid md:grid-cols-6 grid-cols-2 gap-4">
                <Image
                    src={"/images/img27.svg"}
                    alt="hero image"
                    width={153}
                    height={34}
                  ></Image>
                  <Image
                    src={"/images/img28.svg"}
                    alt="hero image"
                    width={152}
                    height={75}
                  ></Image>
                  <Image
                    src={"/images/img29.svg"}
                    alt="hero image"
                    width={151}
                    height={42}
                  ></Image>
                  <Image
                    src={"/images/img30.svg"}
                    alt="hero image"
                    width={151}
                    height={62}
                  ></Image>
                  <Image
                    src={"/images/img33.svg"}
                    alt="hero image"
                    width={151}
                    height={72}
                  ></Image>
                  <Image
                    src={"/images/img34.svg"}
                    alt="hero image"
                    width={150}
                    height={70}
                  ></Image>

                </div>

            </div>

        </div>
    </div>
    </div>
  )
}

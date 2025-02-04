import React from 'react'
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";

export default function Section7() {
  return (
    <div>
      <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
<Link href={"/shop#shopItem"}>
       <div className='w-screen flex justify-center items-center h-[92px]'
        >
            <div className='w-[1049px] h-full flex justify-between items-center'>
            <h1 className='text-[14px] font-bold text-[#737373]'>Showing all 12 results
            </h1>
            <div className='md:flex hidden justify-center items-center gap-4'>
                <h1 className=' text-[#252B42]'>Views:
                </h1>
                <i className='bx bx-grid-alt text-xl '></i>
                <i className='bx bx-menu text-xl '  ></i>
                
                
            </div>
            <div className=' flex gap-2'>
            <Image
                    src={"/images/img26.svg"}
                    alt="hero image"
                    width={141}
                    height={50}
                  ></Image>
                  
            <Button className='font-bold text-[16px]w-[94px] h-[52px] bg-[#23A6F0] border-[1px] rounded '>Filter</Button>
                 

            </div>
            </div>

        </div>
</Link>

        <div className='md:w-screen p-10 md:p-0 md:h-[225px] mb-14 flex justify-center items-center'>
            <div className='md:w-[1088px] flex justify-center items-center md:h-full'>
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
  )
}


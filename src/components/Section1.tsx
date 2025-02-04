import React from 'react'
import Image from "next/image"
import Link from 'next/link'
export default function Section1() {
  return (
             

      <div className="w-full my-10 flex justify-center items-center">
  <div className="w-full md:w-[1050px] flex flex-col gap-16">
    <div className="text-center flex flex-col gap-3">
      <h1 className="font-bold text-[24px]">EDITORS PICK</h1>
      <p>Problems trying to resolve the conflict between</p>
    </div>
    <div className="grid gap-3 w-full md:grid-cols-5">
      {/* First image spans 2 columns and 2 rows */}
      <div className="md:col-span-2 md:row-span-2">
        <Link href="/shop">
          <Image
            src="/images/img3.svg"
            alt="hero image"
            width={510}
            height={500}
            className="w-full h-full object-cover "
          />
        </Link>
      </div>
      {/* Second image spans 1 column and 2 rows */}
      <div className="md:col-span-1 md:row-span-2">
        <Link href="/shop">
          <Image
            src="/images/img4.svg"
            alt="hero image"
            width={240}
            height={500}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      {/* Third image spans 1 column */}
      <div className="md:col-span-2">
        <Link href="/shop">
          <Image
            src="/images/img5.svg"
            alt="hero image"
            width={240}
            height={242}
            
          />
        </Link>
      </div>
      {/* Fourth image spans 1 column */}
      <div className="md:col-span-2">
        <Link href="/shop">
          <Image
            src="/images/img6.svg"
            alt="hero image"
            width={240}
            height={242}
            
          />
        </Link>
      </div>
    </div>
  </div>
</div>


  )
}


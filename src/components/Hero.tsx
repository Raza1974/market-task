import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button"
export default function HeroPage() {
  return (
    
    <div>
  <div
    className="relative md:w-screen flex justify-center items-center bg-[url('/images/carousel.jpg')] bg-cover bg-center md:h-[716px]"
  >
    {/* Overlay for black shade */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    
    {/* Text content */}
    <div className="relative md:w-[1000px] flex flex-col gap-6 md:gap-8 justify-center items-center md:items-start text-white h-[651px]">
      <p className="font-bold">SUMMER 2020</p>
      <h1 className="font-bold text-[40px] md:text-[58px]">  NEW COLLECTION
      </h1>
      <p className="w-[376px] text-center md:text-start text-[20px]">
      We know how large objects will act, but things on a small scale.
      </p>
      <div className="w-[221px] h-[62px] flex justify-center items-center md:items-start">
        <Link href={"/shop"}>
          <Button className="font-bold text-[24px] w-[221px] h-[62px] bg-[#2DC071]">
            SHOP NOW
          </Button>
        </Link>
      </div>
    </div>
  </div>
</div>

  )
}

import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link";
export default function Footer() {
  return (
    <div>
        <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />

      <div className='md:w-screen md:h-[488px] md:flex justify-center items-center'>
        <div className='md:h-full md:w-[1050px] flex flex-col justify-center '>
            <div className='flex  md:justify-between justify-around'>
              
            <Link href={"/home"}>
                <div className="logo font-bold text-[#252B42] text-[24px]">
                Bandage

                </div>
             </Link>
                <div className="links text-2xl flex gap-3 text-[#23A6F0]">
                <i className='bx bxl-facebook-circle'  ></i>
                <i className='bx bxl-instagram'></i>
                <i className='bx bxl-twitter'  ></i>
                
                </div>
            </div>
            <div className="footer mt-10 md:flex gap-14 grid grid-cols-2 p-5 md:p-0 pl-16 md:pl-0 md:w-full md:h-[270px]">
               <div className='flex flex-col gap-3'>
                <h1 className='font-bold'>Company Info</h1>
                <Link href={"/about"}>
                <p>About Us</p>
                
              </Link>
              <Link href={"/pricing"}>
                <p>Carrier</p>
              
              </Link>
              <Link href={"/shop"}>
                <p>Shopping</p>
              </Link>
              <Link href={"/cart"}>
                <p>Cart</p>
              </Link>
               </div>
               <div className='flex flex-col gap-3'>
               <h1 className='font-bold'>Legal</h1>
               <Link href={"/about"}>
                <p>About Us</p>
                
              </Link>
              <Link href={"/pricing"}>
                <p>Carrier</p>
              
              </Link>
              <Link href={"/shop"}>
                <p>Shopping</p>
              </Link>
              <Link href={"/cart"}>
                <p>Cart</p>
              </Link>
               </div>
               <div className='flex flex-col gap-3'>
               <h1 className='font-bold'>Features</h1>
                <p>Business Marketing</p>
                <p>User Analytic</p>
                <p>Live Chat</p>
                <p>Unlimited Support</p>
               </div>
               <div className='flex flex-col gap-3'>
               <h1 className='font-bold'>Resources</h1>
                <p>IOS & Android</p>
                <p>Watch a Demo</p>
                <p>Customers</p>
                <p>API</p>
               </div>
               <div className='flex flex-col gap-3'>
               <h1 className='font-bold'>Get In Touch</h1>
               <div>
               <input type="text" placeholder='Your Email' className='w-[200px] h-[58px]' />
               
               <Button className='font-bold bg-[#23A6F0]  w-[117px] h-[52px] "> '>Subscribe</Button>
               
               </div>
               </div>

            </div>

        </div>

      </div>
    </div>
  )
}

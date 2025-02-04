import React from 'react'

export default function Section19() {
  return (
    <div>
      <div className='lg:w-screen flex justify-center items-center 
        lg:h-[882px]  bg-[url("/images/img83.svg")]'>
        <div className='lg:w-[1050px] pl-8  lg:h-[742px]'>
            <div className='lg:w-[599px] gap-[20px] lg:h-full flex flex-col lg:items-start md:items-center justify-center  text-[#252B42]'>
                <h1 className='font-bold'>CONTACT US</h1>
                <h1 className='w-[378px] font-bold text-[58px] md:text-center lg:text-start'>Get in touch 
                today!</h1>
                <p className='w-[376px] md:text-center lg:text-start'>We know how large objects will act, 
                but things on a small scale</p>
                <div className='flex flex-col gap-5'>
                <p className='font-bold'>Phone ; +451 215 215 </p>
                <p className='font-bold'>Fax : +451 215 215</p>
                </div>
                <div className="icon flex gap-3">
                <i className='bx bxl-facebook-circle'  ></i>
                <i className='bx bxl-instagram'></i>
                <i className='bx bxl-twitter'  ></i>
                <i className='bx bxl-linkedin'></i>

                </div>
            </div>

        </div>

      </div>
    </div>
  )
}

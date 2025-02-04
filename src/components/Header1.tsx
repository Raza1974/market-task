import React from 'react'

 function Header1 ()  {
  return (
    <div>
        <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
      <div className='w-screen h-[58px]  bg-neutral-900 hidden lg:flex text-white justify-center items-center '>
        <div className='flex justify-between w-[90%]'>
            <div className="one flex gap-2 justify-center items-center">
                <div className='flex gap-2 justify-center items-center'>
                <i className='bx bx-phone'  ></i>
                    <p className='font-bold'>(225) 555-0118</p>
                </div>
                <div className='flex gap-2 justify-center items-center'
                >
                <i className='bx bx-envelope'></i>
                <p className='font-bold'>michelle.rivera@example.com</p>
                </div>

            </div>
            <div className="two">
                <p className=' font-bold'>Follow Us  and get a chance to win 80% off</p>

            </div>
            <div className="three flex gap-2 justify-center items-center">
                <p className='font-bold'>Follow Us  :</p>
                <div className=' gap-2 flex'>
                  <ul className='gap-2 flex'>
                <li><i className='bx bxl-instagram'></i></li>
                <li><i className='bx bxl-youtube'  ></i></li>
                <li><i className='bx bxl-facebook-circle'  ></i></li>
                <li><i className='bx bxl-twitter'  ></i></li>
                  </ul>
                </div>

            </div>
        </div>

      </div>
    </div>
  )
}
export default Header1

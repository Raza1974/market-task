import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Section5() {
  return (
    <div>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <div className="w-screen flex justify-center items-center lg:h-[1044px]">
        <div className="lg:w-[1050px] flex flex-col justify-center items-center h-full">
          <div className="heading gap-3 flex flex-col justify-center items-center h-[300px]">
            <p className=" font-bold text-[#23A6F0] ">Practice Advice</p>
            <h1 className=" font-bold text-[40px] text-[#252B42]">
              Featured Posts
            </h1>
            <p className="text-[#737373] text-center w-[469px]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="main lg:w-full lg:h-[606px]">
            <div className="boxes grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-2">
              <div className="box w-[328px] h-[606px]">
                <div>
                  <Image
                    src={"/images/img18.svg"}
                    alt="hero image"
                    width={348}
                    height={300}
                  ></Image>
                </div>
                <div className="item flex flex-col gap-5 p-3">

                <div className=" flex gap-2">
                  <span className=" text-[#8EC2F2]">Google</span>Trending
                  <span></span>
                  <span>New</span>
                </div>
                <h1 className="font-[20px] w-[247px] text-[#252B42]">
                  Loudest à la Madison #1 (Lintegral)
                </h1>
                <p className=" text-[#737373] w-[280px]">
                  We focus on ergonomics and meeting you where you work. Its
                  only a keystroke away.
                </p>
                <div className=" flex justify-between">
                  <div className=" flex items-center gap-2">
                    <i className="bx bx-alarm  text-[#23A6F0]"></i>
                    <h1>22 April 2021</h1>
                  </div>
                  <div className=" items-center flex gap-2">
                  <i className='bx bx-bar-chart  text-[#23A6F0]'></i>
                    <h1>10 comments</h1>
                  </div>
                </div>
                <Link href={"https://sanity-blog-sand-theta.vercel.app/"}>
                <div className="flex gap-2 items-center">
                  <h1 className="font-bold text-[#737373]">Learn More</h1>
                  <i className='bx bx-chevron-right text-3xl text-[#23A6F0]'  ></i>
                </div>
                </Link>
                </div>
              </div>
              <div className="box w-[328px] h-[606px]">
                <div>
                  <Image
                    src={"/images/img19.svg"}
                    alt="hero image"
                    width={348}
                    height={300}
                  ></Image>
                </div>
                <div className="item flex flex-col gap-5 p-3">

                <div className=" flex gap-2">
                  <span className=" text-[#8EC2F2]">Google</span>Trending
                  <span></span>
                  <span>New</span>
                </div>
                <h1 className="font-[20px] w-[247px] text-[#252B42]">
                  Loudest à la Madison #1 (Lintegral)
                </h1>
                <p className=" text-[#737373] w-[280px]">
                  We focus on ergonomics and meeting you where you work. Its
                  only a keystroke away.
                </p>
                <div className=" flex justify-between">
                  <div className=" flex items-center gap-2">
                    <i className="bx bx-alarm  text-[#23A6F0]"></i>
                    <h1>22 April 2021</h1>
                  </div>
                  <div className=" items-center flex gap-2">
                  <i className='bx bx-bar-chart  text-[#23A6F0]'></i>
                    <h1>10 comments</h1>
                  </div>
                </div>
                <Link href={"https://sanity-blog-sand-theta.vercel.app/"}>
                <div className="flex gap-2 items-center">
                  <h1 className="font-bold text-[#737373]">Learn More</h1>
                  <i className='bx bx-chevron-right text-3xl text-[#23A6F0]'  ></i>
                </div>
                </Link>
                </div>
              </div>
              <div className="box w-[328px] h-[606px]">
                <div>
                  <Image
                    src={"/images/img20.svg"}
                    alt="hero image"
                    width={348}
                    height={300}
                  ></Image>
                </div>
                <div className="item flex flex-col gap-5 p-3">

                <div className=" flex gap-2">
                  <span className=" text-[#8EC2F2]">Google</span>Trending
                  <span></span>
                  <span>New</span>
                </div>
                <h1 className="font-[20px] w-[247px] text-[#252B42]">
                  Loudest à la Madison #1 (Lintegral)
                </h1>
                <p className=" text-[#737373] w-[280px]">
                  We focus on ergonomics and meeting you where you work. Its
                  only a keystroke away.
                </p>
                <div className=" flex justify-between">
                  <div className=" flex items-center gap-2">
                    <i className="bx bx-alarm  text-[#23A6F0]"></i>
                    <h1>22 April 2021</h1>
                  </div>
                  <div className=" items-center flex gap-2">
                  <i className='bx bx-bar-chart  text-[#23A6F0]'></i>
                    <h1>10 comments</h1>
                  </div>
                </div>
                <Link href={"https://sanity-blog-sand-theta.vercel.app/"}>
                <div className="flex gap-2 items-center">
                  <h1 className="font-bold text-[#737373]">Learn More</h1>
                  <i className='bx bx-chevron-right text-3xl text-[#23A6F0]'  ></i>
                </div>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

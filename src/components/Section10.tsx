import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Section10() {
  return (
    <div>
      <div className="lg:w-screen flex overflow-hidden justify-center items-center lg:h-[92px]">
        <div className="lg:w-[1049px] md:h-full flex  items-center">
          <h1 className="text-[16px] font-bold text-[#252B42]">Home</h1>
          <i className="bx bx-chevron-right text-2xl text-[#737373]"></i>
          <h1>Shop</h1>
        </div>
      </div>
      <div className="lg:w-screen  lg:h-[598px] flex justify-center items-center">
        <div className="lg:w-[1050px]  w-[400px] lg:flex lg:h-[550px] gap-10 ">
          <div className="left lg:w-1/2">
            <div className="lg:w-[506px] md:h-[450px] ">
              <Image
                src={"/images/img45.svg"}
                alt="hero image"
                width={506}
                height={450}
              ></Image>
            </div>
            <div className="w-full mt-2 h-[75px] flex gap-2">
              <Image
                src={"/images/img46.svg"}
                alt="hero image"
                width={100}
                height={75}
              ></Image>
              <Image
                src={"/images/img47.svg"}
                alt="hero image"
                width={100}
                height={75}
              ></Image>
            </div>
          </div>
          <div className="right flex justify-center  pt-5 lg:w-1/2">
            <div className="lg:w-[510px] p-8  w-[400px] flex flex-col  gap-5 lg:h-[471px]">
              <h1 className="text-[20px] font-bold">Floating Phone</h1>
              <div className=" flex gap-3">
                <div className="icon  text-[#F3CD03]">
                  <i className="bx bxs-star text-lg"></i>
                  <i className="bx bxs-star text-lg"></i>
                  <i className="bx bxs-star text-lg"></i>
                  <i className="bx bxs-star text-lg"></i>
                  <i className="bx bx-star text-lg"></i>
                </div>
                <h1
                  className="font-bold
              "
                >
                  10 Reviews
                </h1>
              </div>
              <p className="font-bold text-[24px]">$1,139.33</p>
              <div>
                <span className="font-bold">Availability :</span>
                <span className="font-bold text-[#23A6F0]">In Stock </span>
              </div>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <div className="line w-[445px] bg-[#BDBDBD] h-[1px]"></div>
              <div className="colors flex gap-2 w-[150px] h-[30px]">
                <div
                  className="w-[30px] bg-[#23A6F0]
 h-[30px] rounded-full"
                ></div>
                <div className="w-[30px] bg-[#2DC071]  h-[30px]  rounded-full"></div>
                <div className="w-[30px] bg-[#E77C40] h-[30px] rounded-full"></div>
                <div className="w-[30px] bg-[#252B42] h-[30px] rounded-full"></div>
                <div className="w-[30px] bg-[] h-[30px] rounded-full"></div>
              </div>
              <div className="icon flex gap-3">
                <Button className='font-bold bg-[#23A6F0]  w-[148px] h-[44px] "> '>
                  Select Options
                </Button>
                <div className=" flex gap-4 justify-center items-center ">
                  <i className="bx bx-cart "></i>
                  <i className="bx bx-heart "></i>
                  <Image
                    src={"/images/img48.svg"}
                    alt="hero image"
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

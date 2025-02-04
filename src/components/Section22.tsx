import React from "react";
import Image from "next/image";

export default function Section22() {
  return (
    <div>
      <div className="w-screen flex flex-col justify-center items-center h-[320px]">
        <div className="w-[427px] flex flex-col justify-center items-center h-[180px]">
          <h1 className="font-bold ">PRICING</h1>
          <p className="text-[#252B42] text-[50px] md:text-[58px] font-bold">Simple Pricing</p>
          <div>
            <div className="flex">
              <h1 className=" text-[#252B42]">Home</h1>
              <i className="bx bx-chevron-right text-2xl"></i>
              <h1>pricing</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-screen p-5 lg:p-0 flex flex-col justify-center items-center h-[320px]">
        <div className="lg:w-[427px] gap-5 flex flex-col justify-center items-center h-[180px]">
          <p className="text-[#252B42] text-[40px] font-bold">Pricing</p>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <div>
            <div className="flex">
              <Image
                src={"/images/img84.svg"}
                alt="hero image"
                width={311}
                height={44}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

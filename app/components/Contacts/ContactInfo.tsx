import { chefImg, roomImg3, roomImg4 } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function ContactInfo() {
  return (
    <div className="max-w-[1300px] w-full m-auto  text-black my-20 ">
      <div>
        <div className="max-w-[1300px] w-full flex justify-between gap-16 max-800:flex-col-reverse  ">
          <div className="max-w-[850px] w-full my-10">
            <h2
              className="text-[26px] font-medium
        "
            >
              CONTACT INFO:
            </h2>
            <div className="max-w-[850px] w-full my-10 ">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className=" placeholder-secondaryTextColor bg-beige outline-none font-serif w-full p-2 max-400:text-base"
                />
                <div className="w-full h-[1px]   bg-[#7f7e7e] mt-9 max-1000:mt-4 max-450:mt-2" />
              </div>
              <div className="max-w-[800px] w-full flex justify-between gap-7 my-5 max-500:flex-col">
                <div className="w-full max-w-[450px]">
                  <input
                    type="text"
                    placeholder="Email Adress"
                    className=" placeholder-secondaryTextColor bg-beige outline-none font-serif p-2 max-400:text-base"
                  />
                  <div className="w-full h-[1px]   bg-[#7f7e7e] mt-9 max-1000:mt-4 max-450:mt-2" />
                </div>{" "}
                <div className="w-full max-w-[450px]">
                  <input
                    type="number"
                    placeholder="Mobile Phone"
                    className="placeholder-secondaryTextColor bg-beige outline-none font-serif p-2 max-400:text-base"
                  />
                  <div className="w-full h-[1px]  bg-[#7f7e7e] mt-9 max-1000:mt-4 max-450:mt-2" />
                </div>
              </div>
              <div className="flex flex-col w-full my-10">
                <label className="mb-6">Message</label>
                <input
                  type="text"
                  className="  placeholder-secondaryTextColor bg-beige outline-none font-serif w-full p-2 max-400:text-base min-h-[240px] border border-[#7f7e7e] "
                />
              </div>
              <div className="flex gap-3 my-4">
                <input
                  type="checkbox"
                  className="max-w-[20px] w-full accent-beige max-400:max-w-[17px]"
                />
                <p className="text-xl font-normal max-450:text-lg max-400:text-base">
                  I have read and accept the privacy policy.
                </p>
              </div>
              <div className="my-7">
                <button className="bg-transparent shadow-md shadow-gray-400 flex flex-col justify-center items-center p-1 px-7 text-lg font-bold">
                  SEND
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-[554px] w-full flex flex-col gap-6 items-center justify-center max-800:max-w-[720px] ">
            <div className="w-full  flex flex-col justify-center text-center gap-6 items-center p-6 border-white border shadow-md shadow-gray-500">
              <Image src={chefImg} alt="img" width={528} height={528} />
              <div className="w-full flex flex-col items-center justify-center p-6 gap-5">
                <p className="italic font-normal text-[26px]">EXPERIENCES</p>
                <p className="text-base font-normal">
                  Hidden on the main floor of a building in Barcelona's
                  Eixample, this small hotel is another layer of the city's
                  history.
                </p>
                <button className="bg-transparent border border-black flex flex-col justify-center items-center px-10 py-1 my-7">
                  More Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { roomImg3, roomImg4 } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function ContactInfo() {
  return (
    <div className="max-w-[1400px] w-full m-auto  text-black my-20 ">
   
        <div>
          <div className="w-full flex justify-between gap-16 max-800:flex-col-reverse  ">
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
                <div className="w-full flex justify-between gap-7 my-5">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Email Adress"
                      className=" placeholder-secondaryTextColor bg-beige outline-none font-serif p-2 max-400:text-base"
                    />
                    <div className="w-full h-[1px]   bg-[#7f7e7e] mt-9 max-1000:mt-4 max-450:mt-2" />
                  </div>{" "}
                  <div className="w-full">
                    <input
                      type="number"
                      placeholder="Mobile Phone"
                      className="  placeholder-secondaryTextColor bg-beige outline-none font-serif p-2 max-400:text-base"
                    />
                    <div className="w-full h-[1px]  bg-[#7f7e7e] mt-9 max-1000:mt-4 max-450:mt-2" />
                  </div>
                </div>
                <div className="flex flex-col w-full my-10">
                  <label className="mb-6">Message</label>
                  <input
                    type="text"
        
                    className="  placeholder-secondaryTextColor bg-beige outline-none font-serif w-full p-2 max-400:text-base min-h-[240px] border border-[#7f7e7e]"
                  />
                </div>
                <div className="flex gap-3 my-4">
                  <input type="checkbox" className="max-w-[20px] w-full accent-beige" />
                  <p className="text-xl font-normal">
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
              <p>Where Hospitality Feels Like Home შესაცვლელია</p>
              <div className="w-full  flex flex-col justify-center items-center p-6 border-white border shadow-md shadow-gray-500">
                <Image src={roomImg4} alt="img" width={500} height={402} />
                <div>
                  <div className="flex gap-2 mt-2">
                    <p className="text-[#979797] text-base font-medium my-1">
                      Arrival
                    </p>
                    <p className="text-blase text-base font-normal mt-1">
                      June 13 , 2025
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-[#979797] text-base font-medium ">
                      Departure
                    </p>
                    <p className="text-blase text-base font-normal ">
                      June 16 , 2025
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full flex flex-col justify-center items-center my-7">
                    <p className="font-bold text-3xl max-450:text-2xl">
                      STANDARD KING
                    </p>
                    <div className="w-full h-[0.5px] bg-gray-400 my-5"></div>
                  </div>
                  <div className=" max-w-[600px] w-full flex items-center justify-between">
                    <div>
                      <p className="font-normal text-base">3 nights stay</p>
                      <p className="font-normal text-base">taxes and fees</p>
                    </div>
                    <div>
                      <p className="font-normal text-base">$450.00</p>
                      <p className="font-normal text-base">$40.00</p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between my-5">
                    <div>
                      <p className="text-2xl font-semibold my-2 max-450:text-xl">
                        TOTAL
                      </p>
                      <p className="text-sm font-medium">
                        INCLUDING TAXES AND FEES
                      </p>
                    </div>
                    <div className="text-[34px] font-semibold max-450:text-2xl max-450:mt-3">
                      $490
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

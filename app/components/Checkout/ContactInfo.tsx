import { roomImg3, roomImg4 } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function ContactInfo() {
  return (
    <div className="max-w-[1400px] w-full m-auto  text-black ">
      <div className="max-w-[650px] w-full flex flex-col text-black font-mono-serif gap-6 max-400:gap-3 my-20">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Checkout
        </h2>
      </div>
      <div>
        <div className="w-full flex justify-between gap-16 max-800:flex-col-reverse">
        <div className="max-w-[850px] w-full">
        <h2
          className="text-[26px] font-medium
        "
        >
          CONTACT INFO:
        </h2>
          <div className="max-w-[850px] w-full grid grid-cols-2 gap-8 my-14 max-h-[300px] max-1000:grid-cols-1 max-800:grid-cols-2 max-450:grid-cols-1" >
            <div>
              <input
                type="text"
                placeholder="First Name"
                className=" placeholder-secondaryTextColor bg-beige outline-none font-serif w-[150px] p-2 max-400:text-base"
              />
              <div className="w-full h-[1px]   bg-[#7f7e7e] mt-9 max-1000:mt-4 max-450:mt-2" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className=" placeholder-secondaryTextColor bg-beige outline-none font-serif w-[150px] p-2 max-400:text-base"
              />
              <div className="w-full h-[1px]   bg-[#7f7e7e] mt-9 max-1000:mt-4 max-450:mt-2" />
            </div>{" "}
            <div>
              <input
                type="text"
                placeholder="Phone"
                className="  placeholder-secondaryTextColor bg-beige outline-none font-serif w-[150px] p-2 max-400:text-base"
              />
              <div className="w-full h-[1px]  bg-[#7f7e7e] mt-9 max-1000:mt-4 max-450:mt-2" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Mobile Phone"
                className="  placeholder-secondaryTextColor bg-beige outline-none font-serif w-[150px] p-2 max-400:text-base"
              />
              <div className="w-full h-[1px]  bg-[#7f7e7e] mt-9 max-1000:mt-4 max-450:mt-2" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email Adress"
                className="  placeholder-secondaryTextColor bg-beige outline-none font-serif w-[150px] p-2 max-400:text-base"
              />
              <div className="w-full h-[1px]   bg-[#7f7e7e] mt-9 max-1000:mt-4 max-450:mt-2" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Nationality"
                className="  placeholder-secondaryTextColor bg-beige outline-none font-serif w-[150px] p-2 max-400:text-base "
              />
              <div className="w-full h-[1px]   bg-[#7f7e7e] mt-9 max-1000:mt-4 max-450:mt-2" />
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
                  <p className="font-bold text-3xl max-450:text-2xl">STANDARD KING</p>
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
                    <p className="text-2xl font-semibold my-2 max-450:text-xl">TOTAL</p>
                    <p className="text-sm font-medium">
                      INCLUDING TAXES AND FEES
                    </p>
                  </div>
                  <div className="text-[34px] font-semibold max-450:text-2xl max-450:mt-3">$490</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

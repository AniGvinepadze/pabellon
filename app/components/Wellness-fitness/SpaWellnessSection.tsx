import { wellnessImg1, wellnessImg2 } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function SpaWellnessSection() {
  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[650px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Spa / Wellness
        </h2>

        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          Breathe deeply. Let go. Immerse yourself in the Our Spa & Wellness
          offerings are designed to reconnect you with your natural rhythms,
          balancing body, mind and spirit in a setting of pure tranquility.
        </p>
      </div>
      <div className="w-full m-auto flex justify-between gap-6 my-20">
        <div className="max-w-[700px] w-full flex flex-col justify-center items-center ">
          <div className="max-w-[470px] w-full max-h-[500px] flex flex-col justify-center items-center text-center">
            <Image
              src={wellnessImg2}
              alt="img"
              width={469}
              height={617}
              className=" max-w-[470px] w-full object-cover"
            />
            <p className="font-light text-base my-7">Whether you're seeking wellness, fun, or simply a beautiful place to pause, our pools offer the perfect balance of comfort, leisure, and enjoyment for all ages.</p>
          </div>
        </div>
        <div className="max-w-[700px] w-full">
          <Image
            src={wellnessImg1}
            alt="img"
            width={700}
            height={920}
            className="max-w-[700px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

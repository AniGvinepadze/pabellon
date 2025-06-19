import { resImg, wellnessImg, wellnessImg2 } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function WellnessSection() {
  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Wellness & Fitness
        </h2>
        <h2 className="font-normal text-[30px] italic max-600:text-[22px] max-400:text-[18px] custom-font">
          Wellness designed for body, mind and soul
        </h2>
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          Breathe deeply. Let go. Immerse yourself in the slow, grounding beauty
          of Georgias countryside and emerge refreshed, reenergized and
          restored.
        </p>
      </div>
      <div className="my-20">
        <Image
          src={wellnessImg}
          alt="icon"
          width={1540}
          height={940}
          className="max-w-[1600px] w-full "
        />
      </div>
    </div>
  );
}

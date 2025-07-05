import { resImg } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function RestaurantSection() {
  return (
    <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Restaurant & Bars
        </h2>
        <h2 className="font-normal text-[30px] italic max-600:text-[22px] max-400:text-[18px] custom-font">
          Supra Spirit in every bite. Modern taste and Georgian soul at our
          resurant Makrine.
        </h2>
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          
          Indulge in a journey of flavor, ambience and relaxation across our
          thee distinctive bars – each designed to match the mood of your day,
          from sunrise to sunset and beyond.
          Tucked into the heart of the hotel, our bar is a cozy gathering place.
          Step into our stylish billiard corner, where friendly competition
          meets laid-back vibes. This area adds an interactive, energetic
          dimension to the bar experience.
        </p>
      </div>
      <div className="my-20">
        <Image
          priority={true}
          src={resImg}
          alt="icon"
          width={1540}
          height={940}
          className="max-w-[1600px] w-full "
        />
      </div>
    </div>
  );
}

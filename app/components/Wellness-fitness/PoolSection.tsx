import { resImg, wellnessImg, wellnessImg2, wellnessImg4 } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function PoolSection() {
  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[900px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Pool
        </h2>
        <h2 className="font-normal text-[30px] italic max-600:text-[22px] max-400:text-[18px]">
          Let ancient worlds and wonder guide an unforgettable adventure //
          შესაცვლელია
        </h2>
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          Discover wellness at our hotel's beautifully designed pool areas,
          where every guest - from early risers to playful little swimmers - can
          find their perfect escape.
        </p>
      </div>
      <div className="my-20">
        <Image
          src={wellnessImg4}
          alt="icon"
          width={1540}
          height={940}
          className="max-w-[1600px] w-full "
        />
      </div>
      <div className="max-w-[900px] w-full "><p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">Step outside and soak up the sun at our outdoor pool, surrounded by natural beauty and open sky. Whether you're diving in for a refreshing swim or lounging poolside with a cocktail from thePool Bar, this inviting space blends relaxation with style. Sunbeds, umbrellas, and full poolside service ensure a seamless experience under the sun.</p></div>
    </div>
  );
}

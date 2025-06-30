import {
  resImg,
  wellnessImg,
  wellnessImg2,
  wellnessImg4,
  wellnessImg5,
  wellnessImg6,
  wellnessImg7,
} from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function PoolSection() {
  return (
    <div className="max-w-[1100px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[900px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Pool
        </h2>
        <h2 className="font-normal custom-font text-[30px] italic max-600:text-[22px] max-400:text-[18px]">
          Let ancient worlds and wonder guide an unforgettable adventure
        </h2>
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          Discover wellness at our hotel's beautifully designed pool areas,
          where every guest - from early risers to playful little swimmers - can
          find their perfect escape.
        </p>
      </div>
      <div className="my-20">
        <Image
          priority={true}
          src={wellnessImg4}
          alt="icon"
          width={1540}
          height={940}
          className="max-w-[1600px] w-full "
        />
      </div>
      <div className="max-w-[900px] w-full ">
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          Step outside and soak up the sun at our outdoor pool, surrounded by
          natural beauty and open sky. Whether you're diving in for a refreshing
          swim or lounging poolside with a cocktail from thePool Bar, this
          inviting space blends relaxation with style. Sunbeds, umbrellas, and
          full poolside service ensure a seamless experience under the sun.
        </p>
      </div>

      <div className="w-full m-auto flex justify-between gap-6 my-20 max-750:flex-col max-750:mt-72 max-450:mt-56 max-400:mt-36">
        <div className="max-w-[700px] w-full flex flex-col justify-center items-center ">
          <div className="max-w-[470px] w-full max-h-[500px] flex flex-col justify-center items-center text-center max-1200:mt-9 max-750:max-w-[1000px]">
            <Image
              priority={true}
              src={wellnessImg5}
              alt="img"
              width={469}
              height={617}
              className=" max-w-[470px] w-full object-cover max-1200:max-w-[300px] max-850:max-w-[240px] max-750:max-w-[700px] max-750:max-h-[600px] max-450:max-h-[550px]"
            />
            <p className="font-light text-base my-7 max-750:min-h-[300px] max-400:min-h-[230px] max-300:min-h-[190px]">
              Enjoy peaceful moments year-round in our heated indoor pool, a
              serene retreat ideal for leisurely laps or quiet relaxation. With
              soft lighting and a calming atmosphere it's the perfect space to
              unwind, no matter the season.
            </p>
          </div>
        </div>
        <div className="max-w-[700px] w-full">
          <Image
            priority={true}
            src={wellnessImg6}
            alt="img"
            width={700}
            height={920}
            className="max-w-[700px] w-full object-cover"
          />
        </div>
      </div>

      <div className="w-full m-auto my-10">
        <Image
          priority={true}
          src={wellnessImg7}
          alt="wellness"
          width={1170}
          height={744}
          className="max-[1200px] w-full object-contain"
        />
      </div>
    </div>
  );
}

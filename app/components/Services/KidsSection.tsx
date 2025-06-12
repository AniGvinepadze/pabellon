import { kidsErImg, kidsErImg2, kidsErImg3, kidsErImg4, kidsErImg5, resImg } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function KidstSection() {
  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Kids Entertainment
        </h2>
        <h2 className="font-normal text-[30px] italic max-600:text-[22px] max-400:text-[18px]">
          Let ancient worlds and wonder guide an unforgettable adventure//
          შესაცვლელია
        </h2>
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          At our hotel, every guest is special - especially the youngest ones.
          Our Kids' entertainment room is a bright, colorful space where
          children can laugh, learn, and explore in a safe and welcoming
          environment.
        </p>
      </div>
      <div className="my-20">
        <Image
          src={kidsErImg}
          alt="icon"
          width={1540}
          height={940}
          className="max-w-[1600px] w-full "
        />
      </div>
      <div className="grid grid-cols-4 gap-5 w-full">
        <Image src={kidsErImg2} alt="icon" width={388} height={419} className="mt-7"/>
        <Image src={kidsErImg3} alt="icon" width={388} height={508} />{" "}
        <Image src={kidsErImg4} alt="icon" width={385} height={419}  className="object-contain max-h-[400px] mt-3"/>{" "}
        <Image src={kidsErImg5} alt="icon" width={388} height={508} />
      </div>
    </div>
  );
}

import {
  logoCol,
  logoCol2,
  resImg,
  wellnessImg,
  wellnessImg2,
  wineImg,
} from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function WIneSection() {
  return (
    <div className="max-w-[1300px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[750px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <Image
          priority={true}
          src={logoCol2}
          alt="logo"
          width={269}
          height={190}
        />
        <h2 className="font-normal text-[30px] italic max-600:text-[22px] max-400:text-[18px] custom-font">
          Taste the spirit of the land in every glass of Georgian soul
        </h2>
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          Breathe deeply. Let go. Immerse yourself in the We promise an
          exquisite wine experience, deeply rooted in Georgian culture, offering
          wines crafted with passion and expertise to captivate your senses.
        </p>
      </div>
      <div className="my-20">
        <Image
          priority={true}
          src={wineImg}
          alt="icon"
          width={1540}
          height={940}
          className="max-w-[1600px] w-full "
        />
      </div>
    </div>
  );
}

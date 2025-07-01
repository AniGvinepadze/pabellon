import {
  agroImg,
  agroLogo,
  logoCol,
  logoCol2,
  resImg,
  wellnessImg,
  wellnessImg2,
  wineImg,
} from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function AgroSection() {
  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[750px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <Image
          priority={true}
          src={agroLogo}
          alt="logo"
          width={269}
          height={190}
        />
        <h2 className="font-normal text-[30px] custom-font italic max-600:text-[22px] max-400:text-[18px]">
          Rooted in nature, grown with purpose - our land, your table
        </h2>
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          We promise a commitment to fresh, local and organic ingredients, grown
          with respect for the environment, to nourish our guests and the land.
        </p>
      </div>
      <div className="my-20">
        <Image
          priority={true}
          src={agroImg}
          alt="icon"
          width={1440}
          height={890}
          className="max-w-[1600px] w-full "
        />
      </div>
    </div>
  );
}

import {
  agroImg,
  logoCol,
  logoCol2,
  makrineImg,
  makrineImg6,
  makrineLogo,
  resImg,
  wellnessImg,
  wellnessImg2,
  wineImg,
} from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function MakrineSection() {
  return (
    <div className="max-w-[1300px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[750px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <Image
          priority={true}
          src={makrineLogo}
          alt="logo"
          width={269}
          height={190}
        />
        <h2 className="font-normal text-[30px] italic max-600:text-[22px] max-400:text-[18px] custom-font">
          Savor tradition and innovation one unforgettable bite and sip at a
          time
        </h2>
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          Nestled within the hotel, our Georgian “Restaurant Makrine” offers a
          unique culinary experience where time-honored flavors meet
          contemporary creativity.
        </p>
      </div>
      <div className="my-20">
        <Image
          priority={true}
          src={makrineImg6}
          alt="icon"
          width={1440}
          height={890}
          className="max-w-[1600px] w-full "
        />
      </div>
    </div>
  );
}

import {
  agroImg,
  agroImg2,
  agroImg3,
  agroImg4,
  agroImg5,
  walnut2,
} from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function OurMissionSection() {
  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[1100px] w-full flex  justify-between items-center text-center text-secondaryTextColor font-mono-serif gap-16 max-400:gap-3">
        <div className="max-w-[400px] w-full">
          <h2 className="font-semibold text-[40px]  max-600:text-[32px] max-400:text-[26px]">
            Our Mission
          </h2>
          <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px] my-8">
            Our mission is to cultivate beautiful gardens that provide fresh,
            organic product for our hotel and restaurant, while practicing
            sustainable agriculture. Our farmers know their soil intimately,
            allowing us to bring the purest flavors of each season to your
            plate.{" "}
          </p>
        </div>
        <div className="max-w-[828px] w-full">
          <Image src={walnut2} alt="walnutImg" width={828} height={958} />
        </div>
      </div>
      <div className="max-w-[824px] w-full m-auto flex flex-col justify-center my-10">
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px] my-8">
          Here, every meal is a celebration of place, people, and the timeless
          bond between nature and culture. Agriculture here is not industry, it
          is inheritance, love and quiet devotion passed down through
          generations. Meals are born from the morning's gathering: crisp
          vegetables pulled from the earth, tomatoes still warm from the sun,
          basil freshly cut from the garden - a true celebration of life.
        </p>
      </div>
      <div className="flex justify-center w-full my-10 ">
        <div className="  grid grid-cols-4 gap-5 w-full my-8 max-750:my-0 max-800:grid-cols-2 ">
          <Image
            src={agroImg2}
            alt="icon"
            width={388}
            height={518}
            className="max-800:max-w-[300px] max-800:max-h-[370px] max-800:mt-3 w-full"
          />{" "}
          <Image
            src={agroImg3}
            alt="icon"
            width={300}
            height={450}
            className="object-contain max-h-[450px] w-[306px] mt-5 max-800:max-w-[300px]"
          />{" "}
          <Image
            src={agroImg4}
            alt="icon"
            width={300}
            height={450}
            className="max-800:max-w-[300px]w-[300px] w-[300px] mt-5  max-800:max-h-[380px] max-800:mt-3"
          />
          <Image
            src={agroImg5}
            alt="icon"
            width={388}
            height={518}
            className=" max-800:max-w-[300px] w-full"
          />
        </div>
      </div>
    </div>
  );
}

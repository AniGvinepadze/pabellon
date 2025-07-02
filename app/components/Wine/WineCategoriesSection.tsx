import { wine } from "@/app";
import { artWork2, walnut, wineImg1 } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function WineCategoriesSection() {
  return (
    <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[1050px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          Our mission is to craft exceptional wines that reflect Georgia’s rich
          heritage and unique character. We use the finest grape varieties and
          traditional methods passed down through generations. Pabeloni’s winery
          embodies the spirit of Georgia’s 8,000-year-old winemaking legacy.
          Local grape varieties thrive under the Kakhetian sun, cultivated using
          ancient techniques. Each bottle tells a story — of the land, the sun,
          and the Georgian soul.
        </p>
      </div>
      <div className="relative my-20 max-w-[1150px] w-full bg-[#907655] flex flex-col justify-between items-center text-center p-16 gap-10 shadow-lg shadow-gray-500">
        <Image
          priority={true}
          src={walnut}
          alt="walnut"
          width={270}
          height={360}
          className="absolute -left-10 -mt-20"
        />
        <h2 className="font-semibold italic text-[40px]">Categories</h2>
        <div>
          {wine.map((e) => (
            <div key={e.id} className="py-3">
              <p className="font-bold text-2xl my-1">{e.title}</p>
              <p className="font-light text-2xl">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full m-auto items-center my-10 flex flex-col justify-center">
        <Image
          priority={true}
          src={artWork2}
          alt="artwork"
          width={462}
          height={138}
        />
      </div>
      <div className="w-full m-auto items-center my-10 flex flex-col justify-center">
        <Image
          priority={true}
          src={wineImg1}
          alt="artwork"
          width={1500}
          height={850}
        />
      </div>
      <div className="max-w-[800px] w-full m-auto flex flex-col justify-center items-center my-10">
        {" "}
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          At our table, wine is more than a drink — it is a bridge between past
          and present, a celebration of life, family, and friendship. We invite
          you to taste one of Georgia’s true treasures — a wine culture as
          precious as the vine itself.
        </p>
      </div>
    </div>
  );
}

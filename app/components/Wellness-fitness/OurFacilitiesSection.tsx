import { facilities, ourFacilities } from "@/app";
import { resImg } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function OurFacilitiesSection() {
  return (
    <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor ">
      <div className="max-w-[1000px] w-full flex m-auto flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Our facilities
        </h2>
      </div>
      <div className="my-20 grid grid-cols-4 items-center max-w-[1250px] w-full max-850:grid-cols-1 m-auto  max-500:my-10">
        {ourFacilities.map((e) => (
          <div
            key={e.id}
            className="bg-secondaryTextColor w-full py-7 px-2 max-850:p-2 "
          >
            <li className="font-light text-lg text-beige max-800:text-base">
              {e.title}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

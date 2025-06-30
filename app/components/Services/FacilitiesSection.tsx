import { facilities } from "@/app";
import { resImg } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function FacilitiesSection() {
  return (
    <div className="max-w-[1100px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Our facilities
        </h2>
      </div>
      <div className="my-20 grid grid-cols-4  max-w-[850px] w-full max-750:grid-cols-1 max-500:my-10">
        {facilities.map((e) => (
          <div
            key={e.id}
            className="bg-secondaryTextColor w-full p-6 max-750:p-2"
          >
            <li className="font-light text-xl text-beige max-800:text-lg">
              {e.title}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

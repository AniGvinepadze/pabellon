import { facilities, sapces, sapces2 } from "@/app";
import { artWork } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function SpacesSection() {
  return (
    <div className="max-w-[1100px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Spaces
        </h2>
      </div>
      <div className="max-w-[1200px] bg-secondaryTextColor w-full my-20 p-7 max-750:p-2 flex flex-col justify-center items-center">
        <div className=" grid grid-cols-3  max-w-[850px] w-full max-750:grid-cols-1 mb-8">
          {sapces.map((e) => (
            <div
              key={e.id}
              className="bg-secondaryTextColor w-full  max-750:p-2"
            >
              <li className="font-light text-xl text-beige max-800:text-lg">
                {e.title}
              </li>
            </div>
          ))}
        </div>
        <div className=" grid grid-cols-2  max-w-[850px] w-full max-750:grid-cols-1 max-500:my-10">
          {sapces2.map((e) => (
            <div key={e.id} className="bg-secondaryTextColor w-full ">
              <li className="font-light text-xl text-beige max-800:text-lg">
                {e.title}
              </li>
            </div>
          ))}
        </div>
      </div>
      <Image
        priority={true}
        src={artWork}
        alt="artwork"
        width={1011}
        height={675}
      />
    </div>
  );
}

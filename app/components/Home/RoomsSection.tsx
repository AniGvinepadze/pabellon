import { rooms } from "@/app";
import { threeHuman } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function RoomsSection() {
  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6">
        <h2 className="font-semibold text-[40px] italic">Rooms</h2>
        <h2 className="font-normal text-[30px] italic">
          Rest in refined comfort, where every detail feels like home
        </h2>
        <p className="text-[17px] font-light max-w-[1000px]">
          Rooms are designed to help you slow down and unwind, offering a
          peaceful retreat inspired by the beauty of the surrounding vineyards
          and mountains.
        </p>
      </div>

      <div className="w-full flex justify-between gap-2 my-10">
        {rooms.map((e) => (
          <div
            key={e.id}
            className="max-w-[340px] max-h-[370px] flex flex-col h-full gap-7"
          >
            <div className="flex-grow">
              <Image
                src={e.img}
                alt={e.title}
                width={380}
                height={429}
                className="max-w-[388px] w-full object-cover min-h-[370px]"
              />
            </div>

            <div className="flex flex-col  text-start gap-8 min-h-[175px]">
              <h2 className="font-semibold italic text-[25px]">{e.title}</h2>
              <p className="font-normal text-[15px]">{e.description}</p>
            </div>

            <div className="flex flex-col mt-auto ">
              <div className="w-full flex gap-[9px] ">
                <div className="flex gap-1">
                  <Image src={e.humanIcon} alt="icon" width={35} height={20} />
                  <p className="font-medium text-sm mt-[1px]">
                    {e.humanQuantity}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image src={e.bedIcon} alt="icon" width={25} height={20} />
                  <p className="font-medium text-sm mt-[1px]">
                    {e.bedQuantity}
                  </p>
                </div>
                <div className="flex gap-2">
                  {e.sofaIcon || e.bathIcon ? (
                    <Image
                      src={e.sofaIcon || e.bathIcon || ""}
                      alt="icon"
                      width={25}
                      height={20}
                    />
                  ) : (
                    ""
                  )}
                  <p className="font-medium text-sm mt-[1px]">
                    {e.sofaQuantity || e.bathQuantity
                      ? e.bathQuantity || e.sofaQuantity
                      : ""}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image src={e.areaIcon} alt="icon" width={20} height={20} />
                  <p className="font-medium text-sm mt-[1px]">{e.area}m </p>
                  <p className="text-xs -mx-[7px] ">2</p>
                </div>
                <div className="flex gap-2 mx-2">
                  <Image src={e.wifiIcon} alt="icon" width={25} height={10} />
                  <p className="font-medium text-sm mt-[1px]">{e.wifi}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

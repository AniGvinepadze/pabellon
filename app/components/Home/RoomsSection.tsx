import { rooms } from "@/app";
import { threeHuman } from "@/app/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RoomsSection() {
  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[900px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic max-600:text-[32px] max-400:text-[26px]">
          Rooms
        </h2>
        <h2 className="font-normal text-[30px] italic  max-600:text-[22px] max-400:text-[18px] custom-font">
          Relax in refined comfort, where every detail is designed to create
          warmth and a homely atmosphere.
        </h2>
        <p className="text-[17px] font-light max-w-[700px]  max-600:text-[15px] max-400:text-[13px]">
          Rooms are designed to help you slow down and unwind, offering a
          peaceful retreat Inspired by the beauty of the surrounding vineyards
          and mountains.
        </p>
      </div>

      <div className="w-full grid grid-cols-4 gap-2 my-16 max-1250:grid-cols-2 max-550:grid-cols-1">
        {rooms.map((e) => (
          <Link
            href={"/rooms"}
            key={e.id}
            className="max-w-[640px] w-full max-h-[370px] flex flex-col h-full gap-7  max-1250:my-10 max-1250:min-h-[800px] max-800:min-h-[700px] max-650:min-h-[600px] max-550:min-h-[820px] max-500:min-h-[740px] max-400:min-h-[690px] "
          >
            <div className="">
              <Image
                priority={true}
                src={e.img}
                alt={e.title}
                width={680}
                height={429}
                className="max-w-[388px] w-full  min-h-[370px] max-1250:max-w-[690px] "
              />
            </div>

            <div className="flex flex-col  text-start gap-8 min-h-[180px] max-1250:min-h-[240px]  max-550:min-h-[0px]">
              <h2 className="font-semibold italic text-[25px]">{e.title}</h2>
              <p className="font-normal text-[15px]">{e.description}</p>
            </div>

            <div className="flex flex-col mt-auto ">
              <div className="w-full flex gap-[9px] max-1350:flex-wrap my-4 ">
                <div className="flex gap-1">
                  <Image
                    priority={true}
                    src={e.humanIcon}
                    alt="icon"
                    width={35}
                    height={20}
                  />
                  <p className="font-medium text-sm mt-[1px]">
                    {e.humanQuantity}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image
                    priority={true}
                    src={e.bedIcon}
                    alt="icon"
                    width={25}
                    height={20}
                  />
                  <p className="font-medium text-sm mt-[1px]">
                    {e.bedQuantity}
                  </p>
                </div>
                <div className="flex gap-2">
                  {e.sofaIcon || e.bathIcon ? (
                    <Image
                      priority={true}
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
                  <Image
                    priority={true}
                    src={e.areaIcon}
                    alt="icon"
                    width={20}
                    height={20}
                  />
                  <p className="font-medium text-sm mt-[1px]">{e.area}m </p>
                  <p className="text-xs -mx-[7px] ">2</p>
                </div>
                <div className="flex gap-2 mx-2">
                  <Image
                    priority={true}
                    src={e.wifiIcon}
                    alt="icon"
                    width={25}
                    height={10}
                  />
                  <p className="font-medium text-sm mt-[1px]">{e.wifi}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

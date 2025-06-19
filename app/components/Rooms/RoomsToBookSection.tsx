import { roomsBook } from "@/app";
import Image from "next/image";
import React from "react";

export default function RoomsToBookSection() {
  return (
    <div>
      {" "}
      <div className="w-full grid grid-cols-2 gap-10 my-16 max-750:grid-cols-1 max-750:gap-0">
        {roomsBook.map((e) => (
          <div
            key={e.id}
            className="max-w-[714px] w-full  flex flex-col  gap-5 max-1100:my-10 max-750:my-4 "
          >
            <div className="">
              <Image src={e.img} alt={e.title} width={714} height={429} />
            </div>

            <div className="flex flex-col  text-start gap-8  max-w-[550px] w-full max-500:gap-4 ">
              <h2 className="font-semibold italic text-[25px] max-500:text-xl">{e.title}</h2>
              <p className="font-normal text-[15px] ">{e.description}</p>
            </div>

            <div className="flex flex-col mt-auto ">
               <div className="flex justify-between max-1200:flex-col ">
              <div className="">
                <div className="w-full flex gap-[14px] max-1350:flex-wrap my-4 ">
                  <div className="flex gap-1">
                    <Image
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
              <div>
                <p className="font-normal text-[40px] max-500:text-[28px]">${e.price}<span className="text-xs font-normal mx-2">From / Per Night</span></p>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { artWork, meetingImg, roomImg } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function RoomsSection() {
  return (
    <div className="max-w-[1300px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor my-20 ">
      <div className="max-w-[750px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Rooms
        </h2>
        <h2 className="font-normal custom-font text-[30px] italic max-600:text-[22px] max-400:text-[18px]">
          Rest in refined comfort, where every detail feels like home
        </h2>
        <p className="text-[17px] font-light  max-600:text-[15px] max-400:text-[13px]">
          Incorporating elements of Georgian heritage and culture seamlessly
          with modern design sensibilities. Maintain a clean and contemporary
          aesthetic that feels fresh and sophisticated.
        </p>
      </div>

      <div className=" mt-20 flex flex-col gap-14 justify-center items-center ">
        <Image
          priority={true}
          src={roomImg}
          alt="meetingImg"
          width={1420}
          height={877}
        />
      </div>
    </div>
  );
}

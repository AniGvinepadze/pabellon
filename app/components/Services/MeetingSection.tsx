import { artWork, meetingImg } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function MeetingSection() {
  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor my-20">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Meetings & Events
        </h2>
        <h2 className="font-normal text-[30px] italic max-600:text-[22px] max-400:text-[18px] custom-font">
          Where ideas come to life and every celebration feels effortless
        </h2>
        <p className="text-[17px] font-light  max-600:text-[15px] max-400:text-[13px]">
          Here, business is more than an agenda - it's an experience. Our
          Ballroom and meetings rooms are designed to inspire, to turn simple
          meetings into shared memories and ordinary events into extraordinary
          moments.
        </p>
      </div>

      <div className=" my-20 flex flex-col gap-14 justify-center items-center">
        <Image src={meetingImg} alt="meetingImg" width={1420} height={877} />
        <Image src={artWork} alt="artwork" width={1011} height={675} />
      </div>
    </div>
  );
}

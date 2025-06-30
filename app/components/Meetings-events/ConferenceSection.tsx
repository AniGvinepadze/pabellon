import { meetingImg, resImg } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function ConferenceSection() {
  return (
    <div className="max-w-[1100px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor mt-20">
      <div className="max-w-[1100px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Conference & Ballroom
        </h2>
        <h2 className="font-normal text-[30px] italic max-600:text-[22px] max-400:text-[18px] custom-font">
          Where ideas come to life and every celebration feels effortless
        </h2>
        <p className="text-[17px] font-light max-w-[1030px] max-600:text-[15px] max-400:text-[13px]">
          Elegant and spacious, our ballroom is the centerpiece of our event
          offerings - perfect for weddings, gala dinners or large corporate
          events. Hall effortlessly blends sophistication with functionality. It
          can accommodate both intimate celebrations and grand receptions, with
          optional staging, dance floors, and banquet seating. Our dedicated
          events team is on hand to assist with every detail - from planning and
          setup to catering and technical support - ensuring a seamless
          experience for guests.
        </p>
      </div>
      <div className="my-20">
        <Image
          priority={true}
          src={meetingImg}
          alt="icon"
          width={1540}
          height={940}
          className="max-w-[1600px] w-full "
        />
      </div>
    </div>
  );
}

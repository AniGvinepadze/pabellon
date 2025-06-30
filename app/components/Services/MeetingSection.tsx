import { artWork, meetingImg } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function MeetingSection() {
  return (
    <div className="max-w-[1100px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor my-20">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Meetings & Events
        </h2>
        <h2 className="font-normal text-[30px] italic max-600:text-[22px] max-400:text-[18px] custom-font">
          Here, business is more than just an agenda. Our event spaces are
          designed to inspire, motivate, and spark new ideas. Each room is
          thoughtfully arranged to transform any type of gathering into a
          memorable experience.
        </h2>
        <p className="text-[17px] font-light  max-600:text-[15px] max-400:text-[13px]">
          Naturally, the signature elements of Georgian hospitality are woven
          into these spaces as well. The rooms are also equipped with the latest
          technology to meet all your event needs.
        </p>
        <p className="text-[17px] font-normal  max-600:text-[15px] max-400:text-[13px]">
          For more information, to view the venue, or to make a reservation,
          please contact the reception at extension 100.
        </p>
      </div>

      <div className=" my-20 flex flex-col gap-14 justify-center items-center">
        <Image
          priority={true}
          src={meetingImg}
          alt="meetingImg"
          width={1420}
          height={877}
        />
        <Image
          priority={true}
          src={artWork}
          alt="artwork"
          width={1011}
          height={675}
        />
      </div>
    </div>
  );
}

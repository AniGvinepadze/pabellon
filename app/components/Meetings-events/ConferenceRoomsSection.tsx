"use client";
import {
  artWork,
  conferencee,
  meetingImg,
  meetingImg1,
  meetingImg3,
  meetingImg4,
} from "@/app/assets";
import Image from "next/image";

import React from "react";
import { meeting } from "@/app";
import ContactUsSection from "../Home/ContactUsSection";
import m1 from "../../../public/assets/meeting1 (1).png";
import m2 from "../../../public/assets/meeting1 (2).png";
import m3 from "../../../public/assets/meeting1 (3).png";
import m4 from "../../../public/assets/meeting1 (4).png";


export default function ConferenceRoomsSection() {
  return (
    <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor my-20">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Conference Rooms
        </h2>
        <p className="font-light text-[17px] max-600:text-[15px] max-400:text-[13px]">
          Our fully equipped conference rooms offer a modern, flexible
          environment for business gatherings. Whether you’re hosting a
          high-level corporate meeting, a training seminar, or a grand
          celebration, our hotel offers the ideal setting with multifunctional
          event spaces designed to meet every need - from professional to
          personal.
        </p>
        <p className="text-[17px] font-light  max-600:text-[15px] max-400:text-[13px]">
          With a variety of layouts available - from boardroom to classroom or
          theater-style - our venues can be tailored for meetings, workshops, or
          private presentations.
        </p>
      </div>

      <div className=" my-20 flex flex-col gap-14 justify-center items-center">
        <Image
          priority={true}
          src={conferencee}
          alt="meetingImg"
          width={1420}
          height={877}
        />
      </div>

      <div className="max-w-[1300px] w-full mb-20 p-7 max-750:p-2 flex flex-col justify-center items-center">
        <div className=" flex gap-10 items-center justify-center text-center m-auto max-w-[950px] w-full max-550:flex-col mb-8 max-550:gap-4">
          <p className="max-w-[250px] w-full font-light text-xl max-800:text-lg max-550:max-w-[300px]">
            Meeting Room Iliauri - 83.64 m²
          </p>
          <p className="max-w-[250px] w-full font-light text-xl max-800:text-lg max-550:max-w-[300px]">
            Meeting Room Kamara - 83.64 m²
          </p>
          <p className="font-light max-w-[230px] w-full text-xl max-800:text-lg max-550:max-w-[300px]">
            Iliauri & Kamara - 167.28 m²
          </p>
        </div>
        <div className=" flex gap-10 items-center text-center justify-center max-w-[650px] my-4 w-full max-550:flex-col max-500:my-0 max-550:gap-4">
          <p className="font-light text-xl max-w-[250px] w-full max-800:text-lg max-550:max-w-[320px]">
            Boardroom Krebuli Room - 79.92 m²
          </p>{" "}
          <p className="font-light text-xl max-w-[250px] w-full max-800:text-lg max-550:max-w-[300px]">
            Ballroom Alazani Hall - 355.9 m²
          </p>
        </div>
      </div>
      <div className=" w-full">
        <div
         className="w-full grid grid-cols-4 gap-5 max-750:grid-cols-2"
        >
            <Image
              priority={true}
              src={m1}
              alt="img"
              width={500}
              height={420}
              className="min-h-[420px] object-cover max-w-[400px] w-full  max-450:min-h-[300px]  "
            />
            <Image
              priority={true}
              src={m2}
              alt="img"
              width={500}
              height={420}
              className="min-h-[420px] object-cover max-w-[400px] w-full max-450:min-h-[300px] "
            />
            <Image
              priority={true}
              src={m3}
              alt="img"
              width={500}
              height={420}
              className="min-h-[420px] object-cover max-w-[400px] w-full max-450:min-h-[300px] "
            />
            <Image
              priority={true}
              src={m4}
              alt="img"
              width={500}
              height={420}
              className="min-h-[420px] object-cover max-w-[400px] w-full max-450:min-h-[300px] "
            />
         
        </div>
      </div>
      <div></div>
    </div>
  );
}

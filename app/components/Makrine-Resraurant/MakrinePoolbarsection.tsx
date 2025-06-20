"use client";
import {
  artWork,
  makrineImg3,
  makrineImg4,
  makrineImg6,
  meetingImg,
  meetingImg1,
  meetingImg3,
  meetingImg4,
} from "@/app/assets";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { meeting } from "@/app";
import ContactUsSection from "../Home/ContactUsSection";

export default function MakrinePoolBarSection() {
  return (
    <div className="max-w-[1300px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor my-20">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Pool Bar
        </h2>
        <p className="font-light text-[17px] max-600:text-[15px] max-400:text-[13px]">
          Bask in the sun and enjoy refreshing drinks at our Pool Bar, designed
          for carefree enjoyment. With poolside service and a relaxed, upbeat
          atmosphere, the Pool Bar is the perfect place to unwind, socialize and
          soak in the holiday vibe. Set just steps from the water’s edge, it
          offers a breezy, laid-back atmosphere where the only decisions you
          need to make are shaken or stirred, fruity or frozen.
        </p>
      </div>

      <div className=" my-20 flex flex-col gap-14 justify-center items-center">
        <Image
          priority={true}
          src={makrineImg6}
          alt="meetingImg"
          width={1420}
          height={877}
        />
      </div>

      <div></div>
    </div>
  );
}

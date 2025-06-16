"use client";
import {
  artWork,
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

export default function ConferenceRoomsSection() {
  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor my-20">
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
        <Image src={meetingImg1} alt="meetingImg" width={1420} height={877} />
      </div>
      <div className=" w-full">
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          modules={[Autoplay]}
          className=" w-full flex "
        >
          <SwiperSlide className="w-full">
            <Image
              src={meetingImg3}
              alt="img"
              width={500}
              height={420}
              className="max-h-[420px] object-cover max-w-[400px] w-full m-5"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Image
              src={meetingImg4}
              alt="img"
              width={500}
              height={420}
              className="max-h-[420px] object-cover max-w-[400px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Image
              src={meetingImg3}
              alt="img"
              width={500}
              height={420}
              className="max-h-[420px] object-cover max-w-[400px] w-full m-5"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Image
              src={meetingImg4}
              alt="img"
              width={500}
              height={420}
              className="max-h-[420px] object-cover max-w-[400px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Image
              src={meetingImg3}
              alt="img"
              width={500}
              height={420}
              className="max-h-[420px] object-cover max-w-[400px] w-full m-5"
            />
          </SwiperSlide>
           <SwiperSlide className="w-full">
            <Image
              src={meetingImg4}
              alt="img"
              width={500}
              height={420}
              className="max-h-[420px] object-cover max-w-[400px] w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

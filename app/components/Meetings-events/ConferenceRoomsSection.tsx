"use client"
import { artWork, meetingImg, meetingImg1 } from "@/app/assets";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import React from "react";

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
       <div className="w-full max-w-4xl mx-auto mt-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <div className="h-64 bg-blue-500 text-white flex items-center justify-center text-2xl">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-64 bg-green-500 text-white flex items-center justify-center text-2xl">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-64 bg-red-500 text-white flex items-center justify-center text-2xl">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}

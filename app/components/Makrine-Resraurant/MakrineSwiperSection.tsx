"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { makrineImg, makrineImg2, meetingImg } from "@/app/assets";

export default function MakrineSwiperSection() {
  return (
    <div className="w-full m-auto">
      {" "}
      <div className=" w-full">
        <Swiper
          spaceBetween={15}
          slidesPerView={4}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          modules={[Autoplay, Pagination]}
          className=" w-full flex  "
        >
          <SwiperSlide className="w-full">
            <Image src={makrineImg} alt="img" width={615} height={760} />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Image src={makrineImg2} alt="img" width={615} height={760} />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Image src={makrineImg} alt="img" width={615} height={760} />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Image src={makrineImg2} alt="img" width={615} height={760} />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Image src={makrineImg} alt="img" width={615} height={760} />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Image src={makrineImg2} alt="img" width={615} height={760} />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <div className="grid grid-cols-4 gap-5">
        <Image src={makrineImg} alt="img" width={615} height={760} />
        <Image src={makrineImg2} alt="img" width={615} height={760} />{" "}
        <Image src={makrineImg} alt="img" width={615} height={760} />
        <Image src={makrineImg2} alt="img" width={615} height={760} />
      </div> */}
    </div>
  );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { makrineImg5, meetingImg4, next, prev } from "@/app/assets";
import { useRef } from "react";

const MakrineLobbyBarSection = () => {
  const swiperRef = useRef<any>(null);
  return (
    <div className="max-w-[1440px] w-full my-20 m-auto">
      <div className="max-w-[1300px] w-full flex flex-col  relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={false}
          speed={1500}
          className="max-w-[1200px] w-full flex items-center justify-center"
        >
          <SwiperSlide>
            <Image
              priority={true}
              src={makrineImg5}
              alt="makrine"
              width={1200}
              height={750}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              priority={true}
              src={makrineImg5}
              alt="makrine"
              width={1200}
              height={750}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              priority={true}
              src={makrineImg5}
              alt="makrine"
              width={1200}
              height={750}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              priority={true}
              src={makrineImg5}
              alt="makrine"
              width={1200}
              height={750}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              priority={true}
              src={makrineImg5}
              alt="makrine"
              width={1200}
              height={750}
            />
          </SwiperSlide>
        </Swiper>

        <div className="flex justify-between mt-4 ">
          <button onClick={() => swiperRef.current?.swiper.slidePrev()}>
            <Image
              priority={true}
              src={prev}
              alt="prev"
              width={19}
              height={36}
              className="absolute top-1/2"
            />
          </button>
          <button onClick={() => swiperRef.current?.swiper.slideNext()}>
            <Image
              priority={true}
              src={next}
              alt="next"
              width={19}
              height={36}
              className=" absolute top-1/2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakrineLobbyBarSection;

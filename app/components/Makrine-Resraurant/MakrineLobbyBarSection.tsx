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
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3 m-auto my-20">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Lobby Bar
        </h2>
        <p className="font-light text-[17px] max-600:text-[15px] max-400:text-[13px]">
          Warm hospitality, great music, delicious Georgian bites, a tapas menu,
          and stories shared over a glass of wine — this is the spirit of our
          bar. You are welcome to the billiards corner, also on the first floor,
          where friendly competition meets a lively and interactive setting.
        </p>
        <p className="font-medium text-[17px] max-600:text-[15px] max-400:text-[13px]">
          Join us daily from 12:00 PM to 12:00 AM (kitchen closes at 11:30 PM).
        </p>
      </div>

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

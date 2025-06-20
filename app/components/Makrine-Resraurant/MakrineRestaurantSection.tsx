"use client";
import {
  artWork,
  makrineImg3,
  makrineImg4,
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

export default function MakrinerestaurantSection() {
  return (
    <div className="max-w-[1300px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor my-20">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Makrine Restaurant
        </h2>
        <p className="font-light text-[17px] max-600:text-[15px] max-400:text-[13px]">
          Our mission is to nourish our guests with love and care, just like
          Makrine, offering delectable dishes and a beautiful ambience that
          feels like home.  Our Menu brings Kakhetian heritage to life with a
          fresh, modern spirit. Whether you’re savoring reimagined bites, each
          dish tells a story - familiar, yet full of delightful surprises, where
          innovation meets identity.
        </p>
        <p className="text-[17px] font-light  max-600:text-[15px] max-400:text-[13px]">
       Step into our restaurant and discover the soul of Georgian hospitality. This is a place, where tradition lives on - not just in the recipes, but in the way we welcome you.
        </p>
      </div>

      <div className=" my-20 flex flex-col gap-14 justify-center items-center">
        <Image src={makrineImg3} alt="meetingImg" width={1420} height={877} />
      </div>

      <div></div>
    </div>
  );
}

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
    <div className="max-w-[1100px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor my-20">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          Makrine Restaurant
        </h2>
        <p className="font-light text-[17px] max-600:text-[15px] max-400:text-[13px]">
          In Kvareli, where Ilia Chavchavadze grew up, the atmosphere is steeped
          in the nostalgic spirit of his time. The warmth and hospitality of the
          space are enhanced by the persona of Makrine — Ilia’s aunt, who was
          known for her extraordinary care and attentiveness. She also deeply
          cherished the culture of delicious homemade food.
        </p>
        <p className="text-[17px] font-light  max-600:text-[15px] max-400:text-[13px]">
          Inspired by her legacy, the concept behind Makrine promises an
          unforgettable experience. At the restaurant, you’ll enjoy exquisite
          dishes thoughtfully selected for their authentic Georgian character
          and rich flavors.
        </p>
      </div>

      <div className=" my-20 flex flex-col gap-14 justify-center items-center">
        <Image
          priority={true}
          src={makrineImg3}
          alt="meetingImg"
          width={1420}
          height={877}
        />
      </div>

      <div className="flex flex-col max-w-[900px] w-full gap-6 justify-center items-center">
        {" "}
        <p className="text-[17px] font-light max-w-[600px]  max-600:text-[15px] max-400:text-[13px]">
          The "farm-to-table" philosophy highlights the importance of both food
          quality and the involvement of the local community.
        </p>
        <p className="text-[17px] font-light  max-600:text-[15px] max-400:text-[13px]">
          We invite you to visit Makrine restaurant on the first floor and
          explore the Georgian menu. Alongside Kakhetian specialties, from 12:00
          PM to 12:00 AM (kitchen until 11:30 PM), you can also enjoy a wide
          variety of wines produced at Pabeloni’s own winery in the restaurant’s
          bar.
        </p>
      </div>
    </div>
  );
}

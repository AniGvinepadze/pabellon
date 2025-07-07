"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { makrineImg5, meetingImg4, next, prev } from "@/app/assets";
import { useEffect, useRef, useState } from "react";
import { IMakrine } from "./MakrineSection";
import { axiosInstance } from "@/app/lib/axiosInstance";

const MakrineLobbyBarSection = () => {
  const swiperRef = useRef<any>(null);
  const [restaurantData, setRestaurantData] = useState<IMakrine | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const language = "en";

  useEffect(() => {
    const fetchData = async () => {
      const language = localStorage.getItem("language") || "en";

      try {
        const response = await axiosInstance.get(
          `/api/restaurantbar?lang=${language}`
        );
        setRestaurantData(response.data);

        if (response.data && response.data.length > 0) {
          setRestaurantData(response.data[0]);
        }
      } catch (err: any) {
        setError(err.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!restaurantData) {
    return <div>No data available.</div>;
  }
  return (
    <div className="max-w-[1250px] w-full my-20 m-auto">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3 m-auto my-20">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          {restaurantData.lobby_bar_title}
        </h2>
        <p className="font-light text-[17px] max-600:text-[15px] max-400:text-[13px]">
          {restaurantData.lobby_bar_description}
        </p>
        <p className="font-medium text-[17px] max-600:text-[15px] max-400:text-[13px]">
          {restaurantData.lobby_bar_little_description}
        </p>
      </div>
      <div className="my-20">
        <Image
          priority={true}
          src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${restaurantData.lobbyImageUrl}`}
          alt="icon"
          width={1440}
          height={890}
          className="max-w-[1600px] w-full "
        />
      </div>

      {/* <div className="max-w-[1250px] w-full flex flex-col  relative">
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
      </div> */}
    </div>
  );
};

export default MakrineLobbyBarSection;

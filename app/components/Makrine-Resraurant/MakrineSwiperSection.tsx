"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { axiosInstance } from "@/app/lib/axiosInstance";

export interface MImgs {
  imageUrl: string;
  secondImageUrl: string;
  thirdImageUrl: string;
  fourthImageUrl: string;
}

export default function MakrineSwiperSection() {
  const [imgsData, setImgsData] = useState<MImgs | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const lang = localStorage.getItem("language") || "en";
        const response = await axiosInstance.get(
          `/api/makrineImg?lang=${lang}`
        );
        setImgsData(response.data[0]);
        setLoading(false); // Set loading to false when data is fetched
      } catch (err: any) {
        setError(err.message ?? "Unknown error");
        setLoading(false); // Set loading to false when there's an error
      }
    };

    fetchImages();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-600">Error: {error}</div>;

  return (
    <div className="w-full m-auto my-28">
      <div className="w-full">
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
          className="w-full flex"
        >
          {imgsData && [
            imgsData.imageUrl,
            imgsData.secondImageUrl,
            imgsData.thirdImageUrl,
            imgsData.fourthImageUrl,
          ].map((img, index) => (
            <SwiperSlide className="w-full" key={index}>
              {img && (
                <Image
                  priority={true}
                  src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${img}`}
                  alt={`image-${index}`}
                  width={615}
                  height={760}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

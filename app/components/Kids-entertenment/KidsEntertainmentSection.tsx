"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/app/lib/axiosInstance";

// Types for the data from the backend
export interface IKidsE {
  kids_entertainment_title: string;

  kids_entertainment_section_little_description: string;
  kids_entertainment_section_description: string;
  kids_entertainment_play_area: string;
  imageUrl: string;
}

export interface IImgs {
  imageUrl: string;
  secondImageUrl: string;
  thirdImageUrl: string;
  fourthImageUrl: string;
}

export default function KidsEntertainmentSection() {
  const [data, setData] = useState<IKidsE | null>(null);
  const [imgsData, setImgsData] = useState<IImgs | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const language = "en";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const lang = localStorage.getItem("language") || "en";
        const response = await axiosInstance.get(
          `/api/kids-entertainment?lang=${lang}`
        );
        setData(response.data[0]);
      } catch (err: any) {
        setError(err.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    const fetchImages = async () => {
      try {
        const lang = localStorage.getItem("language") || "en";
        const response = await axiosInstance.get(
          `/api/kids-entertainmentimgs?lang=${lang}`
        );
        setImgsData(response.data[0]);
      } catch (err: any) {
        setError(err.message ?? "Unknown error");
      }
    };

    fetchData();
    fetchImages();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-600">Error: {error}</div>;
  if (!data) return <div className="text-center py-10">No data available.</div>;

  return (
    <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor my-20">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic max-600:text-[32px] max-400:text-[26px]">
          {data.kids_entertainment_title}
        </h2>
        <h2 className="font-normal text-[30px] italic max-600:text-[22px] max-400:text-[18px] custom-font">
          {data.kids_entertainment_section_little_description}
        </h2>
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          {data.kids_entertainment_section_description}
        </p>
      </div>

      <div className="my-20">
        <Image
          priority={true}
          src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${data.imageUrl}`}
          alt="Kids Entertainment"
          width={1540}
          height={940}
          className="max-w-[1600px] w-full"
        />
      </div>

      <div className="max-w-[642px] w-full m-auto mb-10">
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          {data.kids_entertainment_play_area}
        </p>
      </div>

      <div className="flex justify-center w-full">
        <div className="grid grid-cols-4 gap-5 w-full my-8 max-750:my-0 max-800:grid-cols-2">
          {imgsData && imgsData.imageUrl && (
            <Image
              priority={true}
              src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${imgsData.imageUrl}`}
              alt="Kids Entertainment Image 1"
              width={388}
              height={419}
              className="max-800:max-w-[300px] w-full"
            />
          )}
          {imgsData && imgsData.secondImageUrl && (
            <Image
              priority={true}
              src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${imgsData.secondImageUrl}`}
              alt="Kids Entertainment Image 2"
              width={388}
              height={508}
              className="max-800:max-w-[300px] max-800:max-h-[370px] max-800:mt-3 w-full"
            />
          )}
          {imgsData && imgsData.thirdImageUrl && (
            <Image
              priority={true}
              src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${imgsData.thirdImageUrl}`}
              alt="Kids Entertainment Image 3"
              width={322}
              height={419}
              className="object-contain max-h-[400px] w-full max-800:max-w-[300px]"
            />
          )}
          {imgsData && imgsData.fourthImageUrl && (
            <Image
              priority={true}
              src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${imgsData.fourthImageUrl}`}
              alt="Kids Entertainment Image 4"
              width={388}
              height={508}
              className="max-800:max-w-[300px] w-full max-800:max-h-[380px] max-800:mt-3"
            />
          )}
        </div>
      </div>
    </div>
  );
}

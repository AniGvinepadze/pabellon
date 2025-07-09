"use client";
import {
  resImg,
  wellnessImg,
  wellnessImg2,
  wellnessImg4,
  wellnessImg5,
  wellnessImg6,
  wellnessImg7,
} from "@/app/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IWellness } from "./OurFacilitiesSection";
import { axiosInstance } from "@/app/lib/axiosInstance";

export default function PoolSection() {
  const [data, setData] = useState<IWellness | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // if (!isClient) return;

    const fetchData = async () => {
      try {
        const language = localStorage.getItem("language") || "en";
        const response = await axiosInstance.get(
          `/api/spa-wellness?lang=${language}`
        );
        const resData = await response.data;
        if (response.data && response.data.length > 0) {
          setData(response.data[0]);
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
    return <div className="text-center py-10">Loading...</div>;
  }
  if (error) {
    return <div className="text-center py-10 text-red-600">Error: {error}</div>;
  }
  if (!data) {
    return <div className="text-center py-10">No data available.</div>;
  }

  return (
    <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[900px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          {data.pool_title}
        </h2>
        <h2 className="font-normal custom-font text-[30px] italic max-600:text-[22px] max-400:text-[18px]">
          {data.pool_section_little_description}{" "}
        </h2>
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          {data.pool_section_description}
        </p>
      </div>
      {/* <div className="my-20">
        <Image
          priority={true}
          src={wellnessImg4}
          alt="icon"
          width={1540}
          height={940}
          className="max-w-[1600px] w-full "
        />
      </div> */}
      <div className="max-w-[900px] w-full ">
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
        {data.out_door_pool_section_description}
        </p>
      </div>

      <div className="w-full m-auto flex justify-between gap-6 my-20 max-750:flex-col max-750:mt-72 max-450:mt-56 max-400:mt-36">
        <div className="max-w-[700px] w-full flex flex-col justify-center items-center ">
          <div className="max-w-[470px] w-full max-h-[500px] flex flex-col justify-center items-center text-center max-1200:mt-9 max-750:max-w-[1000px]">
            <Image
              priority={true}
                src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${data.firstPoolImageUrl}`}
              alt="img"
              width={469}
              height={617}
              className=" max-w-[470px] w-full object-cover max-1200:max-w-[300px] max-850:max-w-[240px] max-750:max-w-[700px] max-750:max-h-[600px] max-450:max-h-[550px]"
            />
            <p className="font-light text-base my-7 max-750:min-h-[300px] max-400:min-h-[230px] max-300:min-h-[190px]">
              {data.in_door_pool_section_description}
            </p>
          </div>
        </div>
        <div className="max-w-[700px] w-full">
          <Image
            priority={true}
           src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${data.secondPoolImageUrl}`}
            alt="img"
            width={700}
            height={920}
            className="max-w-[700px] w-full object-cover"
          />
        </div>
      </div>

      <div className="w-full m-auto my-10">
        <Image
          priority={true}
        src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${data.thirdPoolImageUrl}`}
          alt="wellness"
          width={1170}
          height={744}
          className="max-[1200px] w-full object-contain"
        />
      </div>
    </div>
  );
}

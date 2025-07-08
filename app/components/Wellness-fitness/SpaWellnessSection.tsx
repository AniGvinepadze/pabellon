"use client";
import { wellnessImg1, wellnessImg2, wellnessImg3 } from "@/app/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IWellness } from "./OurFacilitiesSection";
import { axiosInstance } from "@/app/lib/axiosInstance";

export default function SpaWellnessSection() {
  const [data, setData] = useState<IWellness | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

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
      <div className="max-w-[950px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          {data.spa_and_wellness_title}
        </h2>

        <p className="text-[17px] font-light max-w-[680px]  max-600:text-[15px] max-400:text-[13px]">
          {data.spa_and_wellness_section_little_description}
        </p>
        <p className="text-[17px] font-light max-600:text-[15px] max-400:text-[13px]">
          {data.spa_and_wellness_section_description}
        </p>
      </div>
      <div className="w-full m-auto flex justify-between gap-6 my-20 max-750:flex-col max-750:mt-72 max-450:mt-56 max-400:mt-36">
        <div className="max-w-[700px] w-full flex flex-col justify-center items-center ">
          <div className="max-w-[470px] w-full max-h-[500px] flex flex-col justify-center items-center text-center max-1200:mt-9 max-750:max-w-[1000px]">
            <Image
              priority={true}
              src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${data.firstSpaImageUrl}`}
              alt="img"
              width={469}
              height={617}
              className=" max-w-[470px] w-full object-cover max-1200:max-w-[300px] max-850:max-w-[240px] max-750:max-w-[700px] max-750:max-h-[600px] max-450:max-h-[550px]"
            />
            <p className="font-light text-base my-7 max-750:min-h-[300px] max-400:min-h-[230px] max-300:min-h-[190px]">
              {data.spa_and_wellness_section_about_room}
            </p>
          </div>
        </div>
        <div className="max-w-[700px] w-full">
          <Image
            priority={true}
            src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${data.secondSpaImageUrl}`}
            alt="img"
            width={700}
            height={920}
            className="max-w-[700px] w-full object-cover"
          />
        </div>
      </div>

      <div className="w-full flex justify-between gap-5 my-10  max-750:flex-col-reverse">
        <div className="max-w-[800px] w-full m-auto">
          <Image
            priority={true}
            src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${data.thirdSpaImageUrl}`}
            alt="wellness"
            width={800}
            height={500}
          />
        </div>
        <div className="max-w-[800px] w-full flex flex-col justify-center items-center text-center">
          <div className="max-w-[450px] w-full ">
            <p className="text-2xl max-1000:text-xl max-450:text-lg font-normal custom-font mb-8">
              {" "}
              {data.spa_and_wellness_section_menu}
            </p>
            <Link
              href={"/menu"}
              className="bg-secondaryTextColor px-8 py-2 border border-secondaryTextColor hover:bg-transparent transition-all ease-in-out duration-300 text-beige hover:text-secondaryTextColor text-[17px] font-normal "
            >
              See the menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

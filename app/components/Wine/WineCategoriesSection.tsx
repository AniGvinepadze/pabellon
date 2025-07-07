"use client";
import { wine } from "@/app";
import { artWork2, walnut, wineImg1 } from "@/app/assets";
import { axiosInstance } from "@/app/lib/axiosInstance";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type WineCategory = {
  title: string;
  description: string;
};

type WineData = {
  wine_page_mission: string;
  wine_categories_title: string;
  wine_categories: WineCategory[];
  wine_page_table: string;
  winePageImageFirst: string;
  winePageImageSecond: string;
};

export default function WineCategoriesSection() {
  const [data, setData] = useState<WineData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const language = localStorage.getItem("language") || "en";
        const response = await axiosInstance.get(`/api/wine?lang=${language}`);
        const resData = response.data;
        setData(resData);
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
      <div className="max-w-[1050px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          {data.wine_page_mission}
        </p>
      </div>
      <div className="relative my-20 max-w-[1150px] w-full bg-[#907655] flex flex-col justify-between items-center text-center p-16 gap-10 shadow-lg shadow-gray-500 max-500:p-4 max-500:py-10">
        <Image
          priority={true}
          src={walnut}
          alt="walnut"
          width={270}
          height={360}
          className="absolute max-w-[270px] w-full -left-10 -mt-20 max-700:max-w-[200px] max-500:max-w-[140px] max-500:-mt-28 max-350:max-w-[120px] max-350:-mt-5"
        />
        <h2 className="font-semibold italic text-[40px]  max-500:text-3xl">{data.wine_categories_title}</h2>
        <div>
          {data.wine_categories.map((e, idx) => (
            <div key={idx} className="py-3">
              <p className="font-bold text-2xl my-1 max-500:text-lg">{e.title}</p>
              <p className="font-light text-2xl  max-500:text-lg">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
         <div className="w-full m-auto items-center my-10 flex flex-col justify-center">
        <Image
          priority={true}
          src={artWork2}
          alt="artwork"
          width={462}
          height={138}
        />
      </div>
      <div className="w-full m-auto items-center my-10 flex flex-col justify-center">
        <Image
          priority={true}
           src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${data.winePageImageSecond}`}
          alt="artwork"
          width={1500}
          height={850}
        />
      </div>
      <div className="max-w-[800px] w-full m-auto flex flex-col justify-center items-center my-10">
        {" "}
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
         {data.wine_page_table}
         </p>
      </div>
    </div>
  );
}
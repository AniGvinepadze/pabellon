"use client";
import React, { useState, useEffect } from "react";

import {
  logoCol,
  logoCol2,
  resImg,
  wellnessImg,
  wellnessImg2,
  wineImg,
} from "@/app/assets";
import Image from "next/image";

import { axiosInstance } from "@/app/lib/axiosInstance";



  type WineData = {
  wine_page_title: string;
  wine_page_breath_deeply: string;
  winePageImageFirst: string;
};

export default function WIneSection() {
     const [data, setData] = useState<WineData | null>(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState<string | null>(null);
     useEffect(() => {
       const fetchData = async () => {
         try {
           const language = localStorage.getItem("language") || "en";
           const response = await axiosInstance.get(
             `/api/wine?lang=${language}`
           );
           const resData = await response.data;
           console.log(resData,'resDataresDataresData');
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
      <div className="max-w-[750px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <Image
          priority={true}
          src={logoCol2}
          alt="logo"
          width={269}
          height={190}
        />
        <h2 className="font-normal text-[30px] italic max-600:text-[22px] max-400:text-[18px] custom-font">
          {data.wine_page_title}
        </h2>
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
          {data.wine_page_breath_deeply}
        </p>
      </div>
      <div className="my-20">
        <Image
          priority={true}
          src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${data.winePageImageFirst}`}
          alt="icon"
          width={1540}
          height={940}
          className="max-w-[1600px] w-full "
        />
      </div>
    </div>
  );
}

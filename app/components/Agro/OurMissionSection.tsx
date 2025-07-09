"use client";
import {
  agroImg,
  agroImg2,
  agroImg3,
  agroImg4,
  agroImg5,
  walnut2,
} from "@/app/assets";
import { axiosInstance } from "@/app/lib/axiosInstance";
import Image from "next/image";
import React, { useEffect, useState } from "react";
type AgroData = {
  agro_section_description: string;
  agro_section_little_description: string;
  our_mission_title: string;
  our_mission_description: string;
};
export default function OurMissionSection() {
     const [data, setData] = useState<AgroData | null>(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<string | null>(null);
        useEffect(() => {
          const fetchData = async () => {
            try {
              const language = localStorage.getItem("language") || "en";
              const response = await axiosInstance.get(
                `/api/agro?lang=${language}`
              );
              const resData = await response.data;
              console.log(resData,'resDataresDataresDataresData');
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
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[1250px] w-full flex  justify-between items-center text-center text-secondaryTextColor font-mono-serif gap-16 max-400:gap-3 max-700:flex-col">
        <div className="max-w-[400px] w-full">
          <h2 className="font-semibold text-[40px]  max-600:text-[32px] max-400:text-[26px]">
            {data.our_mission_title}
          </h2>
          <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px] my-8">
            {data.our_mission_description}
          </p>
        </div>
        <div className="max-w-[828px] w-full">
          <Image
            priority={true}
            src={walnut2}
            alt="walnutImg"
            width={828}
            height={958}
          />
        </div>
      </div>
      <div className="max-w-[824px] w-full m-auto flex flex-col justify-center my-10">
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px] my-8">
          {}
        </p>
      </div>
      <div className="flex justify-center w-full my-10 ">
        <div className="  grid grid-cols-4 gap-5 w-full my-8 max-750:my-0 max-800:grid-cols-2 ">
          <Image
            priority={true}
            src={agroImg2}
            alt="icon"
            width={358}
            height={500}
            className="object-cover max-w-[320px] w-full"
            // className="max-800:max-w-[300px] max-800:max-h-[370px] max-800:mt-3 w-full"
          />{" "}
          <Image
            priority={true}
            src={agroImg3}
            alt="icon"
            width={388}
            height={518}
                 className="object-cover max-w-[350px] w-full"
            // className="object-contain max-h-[450px] max-w-[306px] w-full mt-5 max-800:max-w-[300px] max-1000:mt-0 max-650:mt-2 max-600:mt-5"
          />{" "}
          <Image
            priority={true}
            src={agroImg4}
            alt="icon"
            width={388}
            height={518}
                   className="object-cover max-w-[323px] w-full"
            // className="max-800:max-w-[300px]w-[300px] w-[300px] mt-5  max-800:max-h-[380px] max-1000:mt-0"
          />
          <Image
            priority={true}
            src={agroImg5}
            alt="icon"
            width={388}
            height={518}
                 className="object-cover max-w-[313px] w-full"
            // className=" max-800:max-w-[300px] w-full"
          />
        </div>
      </div>
    </div>
  );
}

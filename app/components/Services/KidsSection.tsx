"use client"
import {
  kidsErImg,
  kidsErImg2,
  kidsErImg3,
  kidsErImg4,
  kidsErImg5,
  resImg,
} from "@/app/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IRestauramt } from "./RestaurantSection";
import { axiosInstance } from "@/app/lib/axiosInstance";

export default function KidstSection() {
    const [restaurantData, setRestaurantData] = useState<IRestauramt | null>(
      null
    );
  
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const language = "en";
  
    useEffect(() => {
      const fetchData = async () => {
        const language = localStorage.getItem("language") || "en";
  
        try {
          const response = await axiosInstance.get(
            `/api/services?lang=${language}`
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
  // const fetchDataImg = async () => {
  //       const language = localStorage.getItem("language") || "en";
  
  //       try {
  //         const response = await axiosInstance.get(
  //           `/api/services?lang=${language}`
  //         );
  //         setRestaurantData(response.data);
  
  //         if (response.data && response.data.length > 0) {
  //           setRestaurantData(response.data[0]);
  //         }
  //       } catch (err: any) {
  //         setError(err.message ?? "Unknown error");
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchDataImg()
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


    
    <div className="max-w-[1250px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor my-20">
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3 ">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
        {restaurantData.kids_entertainment_title}
        </h2>
        <h2 className="font-normal text-[30px] italic max-600:text-[22px] max-400:text-[18px] custom-font">
     {restaurantData.kids_entertainment_section_little_description}
        </h2>
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
         {restaurantData.kids_entertainment_section_description}
        </p>
        <p className="text-[17px] font-light max-w-[780px] max-600:text-[15px] max-400:text-[13px]">
         {restaurantData.kids_entertainment_section_big_description}
        </p>
      </div>
      <div className="my-20">
        <Image
          priority={true}
         src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${restaurantData.kidsEntertainmentImageUrl}`}
          alt="icon"
          width={1540}
          height={940}
          className="max-w-[1600px] w-full "
        />
      </div>
      <div className="flex justify-center w-full ">
        <div className="  grid grid-cols-4 gap-5 w-full my-8 max-750:my-0 max-800:grid-cols-2 ">
          <Image
            priority={true}
            src={kidsErImg2}
            alt="icon"
            width={388}
            height={419}
            className="mt-7 max-800:max-w-[300px] w-full"
          />
          <Image
            priority={true}
            src={kidsErImg3}
            alt="icon"
            width={388}
            height={508}
            className="max-800:max-w-[300px] max-800:max-h-[370px] max-800:mt-3 w-full"
          />{" "}
          <Image
            priority={true}
            src={kidsErImg4}
            alt="icon"
            width={322}
            height={419}
            className="object-contain max-h-[400px] mt-3 w-full max-800:max-w-[300px]"
          />{" "}
          <Image
            priority={true}
            src={kidsErImg5}
            alt="icon"
            width={388}
            height={508}
            className="max-800:max-w-[300px] w-full max-800:max-h-[380px] max-800:mt-3"
          />
        </div>
      </div>
    </div>
  );
}

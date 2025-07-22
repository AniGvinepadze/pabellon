"use client";
import { facilities } from "@/app";
import { resImg } from "@/app/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IRestauramt } from "./RestaurantSection";
import { axiosInstance } from "@/app/lib/axiosInstance";

export default function FacilitiesSection() {
  const [data, setData] = useState<IRestauramt | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const language = localStorage.getItem("language") || "en";
        const response = await axiosInstance.get(
          `/api/services?lang=${language}`
        );
        setData(response.data);

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
      <div className="max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic  max-600:text-[32px] max-400:text-[26px]">
          {data.our_facilities_title}
        </h2>
      </div>

        {/* {facilities.map((e) => (
          <div
            key={e.id}
            className="bg-secondaryTextColor w-full p-6 max-750:p-2"
          >
            <li className="font-light text-xl text-beige max-800:text-lg">
              {e.title}
            </li>
          </div>
        ))} */}

        <div className="bg-secondaryTextColor w-full p-6 max-750:p-2 my-20 grid grid-cols-4  max-w-[1000px] max-750:grid-cols-1 max-500:my-10">
          <li className="font-light text-xl text-beige max-800:text-lg  ">
            {data.our_facilities_spa}
          </li>
          <li className="font-light text-xl text-beige max-800:text-lg ">
            {data.our_facilities_indoorPool}
          </li>
          <li className="font-light text-xl text-beige max-800:text-lg ">
            {data.our_facilities_outdoorPool}
          </li>
          <li className="font-light text-xl text-beige max-800:text-lg ">
            {data.our_facilities_gym}
          </li>
        </div>
     
    </div>
  );
}

"use client"
import React, { useEffect, useState } from "react";
import hero from "../../../public/assets/1.png";
import Image from "next/image";
import { axiosInstance } from "@/app/lib/axiosInstance";

export type HomeImageData = {
   hero_imageUrl: string;
}
export default function Hero() {

   const [data, setData] = useState<HomeImageData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    // const [isClient, setIsClient] = useState(false);
  
    // useEffect(() => {
    //   setIsClient(true);
    // }, []);
  
    useEffect(() => {
      // if (!isClient) return;
  
      const fetchData = async () => {
        try {
          const language = localStorage.getItem("language") || "en";
          const response = await axiosInstance.get(
            `/api/home?lang=${language}`
          );
          const resData = await response.data;
          console.log(resData);
          setData(resData);
        } catch (err: any) {
          setError(err.message ?? "Unknown error");
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    // if (!isClient) {
    //   return null;
    // }
  
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
    <div className="max-w-[1250px] w-full m-auto ">
      <Image
        priority={true}
        src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${data.hero_imageUrl}`}
        alt="hero"
        width={1600}
        height={400}
        className="max-w-[1600px] w-full object-contain "
      />
    </div>
  );
}

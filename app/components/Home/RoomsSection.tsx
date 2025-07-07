"use client";
import { rooms } from "@/app";
import { areaIcon, bath, bed, sofa, threeHuman, wifi } from "@/app/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Home } from "./PabellonSection";
import { axiosInstance } from "@/app/lib/axiosInstance";

export interface IHomeRooms {
  imageUrl: string;
  rooms_title_en: string;
  rooms_title_ge: string;
  rooms_description_en: string;
  rooms_description_ge: string;
  rooms_people_quantity: number;
  rooms_bed_quantity: number;
  rooms_area: number;
  rooms_sofa: number;
  rooms_bath: number;
}
export default function RoomsSection() {
  const [homeData, setHomeData] = useState<Home | null>(null);
  const [roomData, setRoomData] = useState<IHomeRooms[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const language = "en";
  useEffect(() => {
    const fetchData = async () => {
      const language = localStorage.getItem("language") || "en";

      try {
        const response = await axiosInstance.get(`/api/home?lang=${language}`);
        setHomeData(response.data);
      } catch (err: any) {
        setError(err.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    const fetchDataRooms = async () => {
      const language = localStorage.getItem("language") || "en";

      try {
        const response = await axiosInstance.get(
          `/api/homeRooms?lang=${language}`
        );

        setRoomData(response.data);
        console.log(response.data);
      } catch (err: any) {
        setError(err.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchDataRooms();
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!homeData) {
    return <div>No data available.</div>;
  }
  const roomsToDisplay = roomData && roomData.slice(0, 4);
  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[900px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px] italic max-600:text-[32px] max-400:text-[26px]">
          {language === "en"
            ? homeData.home_rooms_section_title_en
            : homeData.home_rooms_section_title_ge}
        </h2>
        <h2 className="font-normal text-[30px] italic  max-600:text-[22px] max-400:text-[18px] custom-font">
          {language === "en"
            ? homeData.home_rooms_section_little_description_en
            : homeData.home_rooms_section_little_description_ge}
        </h2>
        <p className="text-[17px] font-light max-w-[700px]  max-600:text-[15px] max-400:text-[13px]">
          {language === "en"
            ? homeData.home_rooms_section_description_en
            : homeData.home_rooms_section_description_ge}
        </p>
      </div>

      <div className="w-full grid grid-cols-4 gap-2 my-16 max-1250:grid-cols-2 max-550:grid-cols-1">
        {roomsToDisplay && roomsToDisplay.length > 0 ? (
          roomsToDisplay.map((e) => (
            <Link
              href={"/rooms"}
              key={e.rooms_title_en}
              className="max-w-[640px] w-full min-h-[470px] flex flex-col h-full gap-7  max-1250:my-10 max-1250:min-h-[800px] max-800:min-h-[700px] max-650:min-h-[600px] max-550:min-h-[820px] max-500:min-h-[740px] max-400:min-h-[690px] "
            >
              <div className="">
                <Image
                  priority={true}
                  src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${e.imageUrl}`}
                  alt={e.rooms_title_en}
                  width={680}
                  height={429}
                  className="max-w-[388px] w-full  min-h-[370px] max-1250:max-w-[690px] "
                />
              </div>

              <div className="flex flex-col text-start gap-8 min-h-[180px] max-1250:min-h-[240px]  max-550:min-h-[0px]">
                <h2 className="font-semibold italic text-[25px]">
                  {" "}
                  {language === "en" ? e.rooms_title_en : e.rooms_title_ge}
                </h2>
                <p className="font-normal text-[15px]">
                  {" "}
                  {language === "en"
                    ? e.rooms_description_en
                    : e.rooms_description_ge}
                </p>
              </div>

              <div className="flex flex-col mt-auto ">
                <div className="w-full flex gap-[9px] max-1350:flex-wrap my-4 ">
                  <div className="flex gap-1">
                    <Image
                      priority={true}
                      src={threeHuman}
                      alt="icon"
                      width={35}
                      height={20}
                    />
                    <p className="font-medium text-sm mt-[1px]">
                      {e.rooms_people_quantity}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Image
                      priority={true}
                      src={bed}
                      alt="icon"
                      width={25}
                      height={20}
                    />
                    <p className="font-medium text-sm mt-[1px]">
                      {e.rooms_bed_quantity}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {e.rooms_sofa || e.rooms_bath ? (
                      <Image
                        priority={true}
                        src={sofa || bath || ""}
                        alt="icon"
                        width={25}
                        height={20}
                      />
                    ) : (
                      ""
                    )}
                    <p className="font-medium text-sm mt-[1px]">
                      {e.rooms_sofa || e.rooms_bath
                        ? e.rooms_bath || e.rooms_bath
                        : ""}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Image
                      priority={true}
                      src={areaIcon}
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <p className="font-medium text-sm mt-[1px]">
                      {e.rooms_area}m{" "}
                    </p>
                    <p className="text-xs -mx-[7px] ">2</p>
                  </div>
                  <div className="flex gap-2 mx-2">
                    <Image
                      priority={true}
                      src={wifi}
                      alt="icon"
                      width={25}
                      height={10}
                    />
                    <p className="font-medium text-sm mt-[1px]">Free Wifi</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>No rooms available.</div>
        )}
      </div>
    </div>
  );
}

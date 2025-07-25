"use client"
import { roomsBook } from "@/app";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IHomeRooms } from "../Home/RoomsSection";
import { axiosInstance } from "@/app/lib/axiosInstance";
import { areaIcon, bath, bed, sofa, threeHuman, wifi } from "@/app/assets";
import { WifiIcon } from "lucide-react";

export default function RoomsToBookSection() {
  const [roomData, setRoomData] = useState<IHomeRooms[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const language = "en";

  useEffect(() => {
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
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!roomData) {
    return <div>No data available.</div>;
  }

  return (
    <div>
      <div className="p-10 w-full grid grid-cols-2 gap-10 my-16 max-750:grid-cols-1 max-750:gap-0 max-600:p-5 max-450:p-2">
        {roomData && roomData.length > 0 ? (
          roomData.map((e, index) => (
            <Link
              href={`https://live.ipms247.com/booking/book-rooms-pabellonhotel`}
              key={e.rooms_title_en || index}
              className="max-w-[714px] w-full flex flex-col gap-5 max-1250:my-10 max-750:my-4"
            >
              <div>
                <Image
                  priority={true}
                  src={`https://pabellona-admin.s3.us-east-1.amazonaws.com/${e.imageUrl}`}
                  alt={e.rooms_title_en}
                  width={714}
                  height={429}
                />
              </div>

              <div className="flex flex-col text-start gap-8 max-w-[550px] w-full max-500:gap-4">
                <h2 className="font-semibold italic text-[25px] max-500:text-xl">
                  {language === "en" ? e.rooms_title_en : e.rooms_title_ge}
                </h2>
                <p className="font-normal text-[15px]">
                  {" "}
                  {language === "en"
                    ? e.rooms_description_en
                    : e.rooms_description_ge}
                </p>
              </div>

              <div className="flex flex-col mt-auto">
                <div className="flex justify-between max-1200:flex-col">
                  <div className="">
                    <div className="w-full flex gap-[14px] max-1350:flex-wrap my-4">
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
                          {e.rooms_area}m
                        </p>
                        <p className="text-xs -mx-[7px]">2</p>
                      </div>
                      <div className="flex gap-2 mx-2">
                        <Image
                          priority={true}
                          src={wifi}
                          alt="icon"
                          width={25}
                          height={10}
                        />
                        <p className="font-medium text-sm mt-[1px]">
                          Free Wifi
                        </p>
                      </div>
                    </div>
                  </div>
                  <div></div>
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

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { logo, whiteLogo } from "../assets";
import { footerNavbar, footerSoc } from "..";
import Link from "next/link";
import glovabIcon from "../../public/assets/Vector (9).svg";
import { usePathname } from "next/navigation";
import { axiosInstance } from "../lib/axiosInstance";
type FooterType = {
  contactUs: string;
  email: string;
  phone: string;
  rooms: string;
  home: string;
  services: string;
  restaurant: string;
  faqs: string;
  instagram: string;
  facebook: string;
  linkedIn: string;
};
export default function Footer() {
  const pathname = usePathname();
  const [data, setData] = useState<FooterType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState<"en" | "ge">("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage as "en" | "ge");
    const fetchData = async () => {
      try {
        const language = localStorage.getItem("language") || "en";
        const response = await axiosInstance.get(
          `/api/footer?lang=${language}`
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

  const footerBackgroundColor =
    pathname === "/rooms" ||
    pathname === "/kids-entertainment" ||
    pathname === "/agro" ||
    pathname === "/blogs"
      ? "#CDBDA4"
      : "#37292B";
  const textColor =
    pathname === "/rooms" ||
    pathname === "/kids-entertainment" ||
    pathname === "/agro" ||
    pathname === "/blogs"
      ? "#37292B"
      : "#EBE5DA";

  const logoImage =
    pathname === "/rooms" ||
    pathname === "/kids-entertainment" ||
    pathname === "/agro" ||
    pathname === "/blogs"
      ? logo
      : whiteLogo;
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
    <div
      className="max-w-[3600px] w-full m-auto"
      style={{ backgroundColor: footerBackgroundColor }}
    >
      <div
        className={`max-w-[1250px] w-full m-auto px-12 bg-footerBg bg-cover text-beige mt-20`}
        style={{ backgroundColor: footerBackgroundColor }}
      >
        <div className="flex justify-between py-10 w-full">
          <div className="w-full flex justify-between gap-7">
            <div>
              <div className="min-h-[300px] flex flex-col justify-between gap-10">
                <Image
                  priority={true}
                  src={logoImage}
                  alt="logo"
                  width={300}
                  height={120}
                />
                <div className="max-w-[240px] w-full justify-between mt-10 hidden max-650:flex max-650:mt-0">
                  <ul className="flex flex-col gap-3">
                    <Link href={"/rooms"}>
                      <li className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300">
                        {data.rooms}
                      </li>
                    </Link>
                    <Link href={"/"}>
                      <li className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300">
                        {data.home}
                      </li>
                    </Link>
                    <Link href={"/services"}>
                      <li className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300">
                        {data.services}
                      </li>
                    </Link>
                    <Link href={"/makrine-restaurant"}>
                      <li className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300">
                        {data.restaurant}
                      </li>
                    </Link>
                    <Link href={"/"}>
                      <li className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300">
                        {data.faqs}
                      </li>
                    </Link>
                  </ul>

                  <ul className="flex flex-col gap-3">
                    <Link href={"https://www.instagram.com/pabellonhotel"}>
                      <li className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300">
                        {data.instagram}
                      </li>
                    </Link>
                    <Link
                      href={
                        "https://www.facebook.com/profile.php?id=61576125146141"
                      }
                    >
                      <li className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300">
                        {data.facebook}
                      </li>
                    </Link>
                    <Link
                      href={
                        "https://www.linkedin.com/company/pabell%C3%B3n-hotel/posts/?feedView=all"
                      }
                    >
                      <li className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300">
                        {data.linkedIn}
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap- max-650:my-10" style={{ color: textColor }}>
                <p className="text-base font-light">{data.contactUs}</p>
                <p className="font-light text-base">
                  {data.email} : info@pabellon.ge
                </p>
                <p className="font-light text-base">
                  {data.phone} : (+995) 35 2 200200
                </p>
              </div>
            </div>
            <div className="max-w-[240px] w-full flex justify-between mt-10 max-650:hidden">
              {" "}
              <ul className="flex flex-col gap-3">
                <Link href={"/rooms"}>
                  <li className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300">
                    {data.rooms}
                  </li>
                </Link>
                <Link href={"/"}>
                  <li className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300">
                    {data.home}
                  </li>
                </Link>
                <Link href={"/services"}>
                  <li className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300">
                    {data.services}
                  </li>
                </Link>
                <Link href={"/makrine-restaurant"}>
                  <li className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300">
                    {data.restaurant}
                  </li>
                </Link>
                <Link href={"/"}>
                  <li className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300">
                    {data.faqs}
                  </li>
                </Link>
              </ul>
              <div className="flex flex-col justify-between my-10">
                <ul className="flex flex-col gap-3">
                  <Link href={"https://www.instagram.com/pabellonhotel"}>
                    <li className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300">
                      {data.instagram}
                    </li>
                  </Link>
                  <Link
                    href={
                      "https://www.facebook.com/profile.php?id=61576125146141"
                    }
                  >
                    <li className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300">
                      {data.facebook}
                    </li>
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/company/pabell%C3%B3n-hotel/posts/?feedView=all"
                    }
                  >
                    <li className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300">
                      {data.linkedIn}
                    </li>
                  </Link>
                </ul>
                {/* <div className="flex justify-end">
                <Image
                  priority={true}
                  src={glovabIcon}
                  alt="icon"
                  width={24}
                  height={24}
                />
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

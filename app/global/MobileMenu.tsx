"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import whiteglovabIcon from "../../public/assets/Vector (9).svg";
import glovabIcon from "../../public/assets/Vector (10).svg";
import { AnimatePresence, motion } from "framer-motion";
import { navbar } from "..";
import { set } from "date-fns";
import { HeaderType } from "./Header";
import { axiosInstance } from "../lib/axiosInstance";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  popup: boolean;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll: () => void;
  mobbgColor: string;
  mobtextColor: string;
  mobglobalSrc: string;
  mobshowNewPopup: boolean;
  setMobShowNewPopup: React.Dispatch<React.SetStateAction<boolean>>;
  mobmarginTop: string;
}

export default function MobileMenu({
  isOpen,
  setIsOpen,
  popup,
  setPopup,
  handleScroll,
  mobbgColor,
  mobglobalSrc,
  mobmarginTop,
  mobshowNewPopup,
  setMobShowNewPopup,
  mobtextColor,
}: MobileMenuProps) {
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const showNewPopupRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<HeaderType | null>(null);
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
          `/api/header?lang=${language}`
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
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        showNewPopupRef.current &&
        !showNewPopupRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setMobShowNewPopup(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleScroll]);
  const toggleLanguage = (selectedLanguage: "en" | "ge") => {
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
    window.location.reload();
    setPopup(false);
  };
  const handleItemClick = () => {
    setIsOpen(true);
    setMobShowNewPopup(true);
  };

  const handleItemOnClick = () => {
    setIsOpen(false);
    setMobShowNewPopup(false);
  };

  if (error) {
    return <div className="text-center py-10 text-red-600">Error: {error}</div>;
  }
  if (!data) {
    return 
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={mobileMenuRef}
          className={`fixed left-0 right-0 z-50 max-1250:block hidden ${mobbgColor} ${mobtextColor} ${mobmarginTop} max-1250:max-w-[1000px] max-350:max-w-[500px] w-full max-h-[calc(100vh-64px)] overflow-y-auto rounded-b-lg`}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 2 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="w-full shadow-md p-4 max-350:p-2">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-5 px-7 py-3">
                <ul className="max-w-[1000px]   transition-all ease-in-out duration-300  flex flex-col text-start gap-7 w-full mt-1 relative ">
                  <Link href={"/"}>
                    <li className="text-base font-medium max-1250:text-lg max-1150:text-sm cursor-pointer hover:text-[18px] tranistion-all easy-in-out duration-300 ">
                      {data.home}
                    </li>
                  </Link>
                  <Link href={"/about-us"}>
                    <li className="text-base font-medium max-1250:text-lg max-1150:text-sm cursor-pointer hover:text-[18px] tranistion-all easy-in-out duration-300">
                      {data.aboutUs}
                    </li>
                  </Link>

                  <Link href={"/rooms"}>
                    <li className="text-base font-medium max-1250:text-lg max-1150:text-sm cursor-pointer hover:text-[18px] tranistion-all easy-in-out duration-300">
                      {data.rooms}
                    </li>
                  </Link>
                  <Link href={"/services"}>
                    <li className="text-base font-medium max-1250:text-lg max-1150:text-sm cursor-pointer hover:text-[18px] tranistion-all easy-in-out duration-300">
                      {data.services}
                    </li>
                  </Link>
                  <button onClick={() => handleItemClick()}>
                    <li className="text-base font-medium max-1250:text-lg max-1150:text-sm cursor-pointer text-start hover:text-[18px] tranistion-all easy-in-out duration-300">
                      {data.experiences}
                    </li>
                  </button>
                  <Link href={"/wine"}>
                    <li className="text-base font-medium max-1250:text-lg max-1150:text-sm cursor-pointer hover:text-[18px] tranistion-all easy-in-out duration-300">
                      {data.wine}
                    </li>
                  </Link>

                  <Link href={"/agro"}>
                    <li className="text-base font-medium max-1250:text-lg max-1150:text-sm cursor-pointer hover:text-[18px] tranistion-all easy-in-out duration-300">
                      {data.agro}
                    </li>
                  </Link>
                  <Link href={"/contact"}>
                    <li className="text-base font-medium max-1250:text-lg max-1150:text-sm cursor-pointer hover:text-[18px] tranistion-all easy-in-out duration-300">
                      {data.contact}
                    </li>
                  </Link>
                </ul>
                {mobshowNewPopup && (
                  <div
                    ref={showNewPopupRef}
                    className={`absolute max-w-[300px] bottom-16 left-7 ${mobbgColor} ${mobtextColor} p-4 shadow-md flex flex-col`}
                  >
                    <Link
                      href={"/makrine-restaurant"}
                      className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
                    >
                      {data.barsRestaurant}
                    </Link>
                    <Link
                      href={"/meetings-events"}
                      className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
                    >
                      {data.meetingEvents}
                    </Link>
                    <Link
                      href={"/wellness-fitness"}
                      className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
                    >
                      {data.spaWellness}
                    </Link>
                    <Link
                      href={"/kids-entertainment"}
                      className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
                    >
                      {data.kids}
                    </Link>
                  </div>
                )}
                <div className="relative w-fit -ml-2 ">
                  <button onClick={() => setPopup((prev) => !prev)}>
                    <Image
                      priority={true}
                      src={mobglobalSrc}
                      alt="globalIcon"
                      width={20}
                      height={20}
                      className="cursor-pointer hover:w-[30px] transition-all ease-in-out duration-300 mx-2"
                    />
                  </button>
                  {popup && (
                    <div
                      className={`absolute top-12 left-0 w-[150px] p-4 shadow-md rounded-md z-50 ${mobbgColor} ${mobtextColor}`}
                    >
                      <p
                        className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
                        onClick={() => toggleLanguage("en")}
                      >
                        English
                      </p>
                      <p
                        className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
                        onClick={() => toggleLanguage("ge")}
                      >
                        Georgia
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

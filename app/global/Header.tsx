"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { navbar } from "..";
import whiteglovabIcon from "../../public/assets/Vector (9).svg";
import glovabIcon from "../../public/assets/Vector (10).svg";
import Link from "next/link";
import mobilemenu from "../../public/assets/Vector.svg";
import MobileMenu from "./MobileMenu";
import whiteMobileMenu from "../../public/assets/burgerwhite.svg";
import { logo, whiteLogo } from "../assets";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>("bg-beige");
  const [logoSrc, setLogoSrc] = useState<string>(logo);
  const [textColor, setTextColor] = useState<string>("text-beige");
  const [globalSrc, setGlobalSrc] = useState<any>(glovabIcon);
  const [showNewPopup, setShowNewPopup] = useState<boolean>(false);
  const [menuSrc, setMenuSrc] = useState<any>(mobilemenu);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor("bg-secondaryTextColor");
      setLogoSrc(whiteLogo);
      setGlobalSrc(whiteglovabIcon);
      setMenuSrc(whiteMobileMenu);
      setTextColor("text-beige");
    } else {
      setBgColor("bg-beige");
      setLogoSrc(logo);
      setGlobalSrc(glovabIcon);
      setMenuSrc(mobilemenu);
      setTextColor("text-black");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (route: string | undefined) => {
    if (!route) {
      setShowNewPopup((prev) => !prev);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`max-w-[1600px] sticky top-0 z-50 w-full m-auto p-3 flex justify-between items-center max-1000:gap-10 ${bgColor} transition-all ease-in-out duration-500`}
    >
      <Link
        href="/home"
        className="hover:scale-110 transition-all ease-in-out duration-300"
      >
        <Image
          priority={true}
          src={logoSrc}
          alt="logo"
          width={300}
          height={90}
          className="max-w-[300px] w-full object-contain max-700:max-w-[220px] bg-transparent transition-all ease-in-out duration-500"
        />
      </Link>
      <div
        className={`flex gap-6 mt-1 max-w-[1300px] w-full max-1100:hidden ${textColor} transition-all duration-500 ease-in-out`}
      >
        <div className="flex gap-7 w-full justify-end items-center mt-4 relative">
          {navbar.map((e) =>
            e.route ? (
              <Link
                key={e.id}
                href={e.route}
                className="max-w-[1000px]  hover:scale-110 transition-all ease-in-out duration-300 relative"
              >
                <p className="text-xl font-medium max-1250:text-lg max-1150:text-base ">
                  {e.title}
                </p>
              </Link>
            ) : (
              <button
                key={e.id}
                onClick={() => handleItemClick(e.route)}
                className="text-xl font-medium max-1250:text-lg max-1150:text-base hover:text-[19px] transition-all duration-300 ease-in-out"
              >
                {e.title}
              </button>
            )
          )}
          {showNewPopup && (
            <div
              className={`absolute max-w-[300px]   right-[370px] mt-64 ${bgColor} ${textColor}  p-4 shadow-md flex flex-col `}
            >
              <Link
                href={"/makrine-restaurant"}
                className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
              >
                Bars & Restaurants
              </Link>
              <Link
                href={"/meetings-events"}
                className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
              >
                Meetings & Events
              </Link>
              <Link
                href={"/wellness-fitness"}
                className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
              >
                Spa & Wellness
              </Link>
              <Link
                href={"/kids-entertainment"}
                className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
              >
                Kids Entertainment
              </Link>
            </div>
          )}
        </div>
        <div className="relative ">
          <button
            className="hover:scale-110 transition-all ease-in-out duration-300 mt-4"
            onClick={() => setPopup((prev) => !prev)}
          >
            <Image
              src={globalSrc}
              alt="globalIcon "
              width={24}
              height={24}
              className="cursor-pointer mt-2 transition-all duration-500 ease-in-out"
            />
          </button>
          {popup && (
            <div
              className={`absolute w-[150px]  items-center -right-2 ${textColor} ${bgColor}   p-4 shadow-md `}
            >
              <p className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300">
                English
              </p>
              <p className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300">
                Georgia
              </p>
            </div>
          )}
        </div>
      </div>
      <button
        className="hidden max-1100:flex hover:scale-110 mt-3 transition-all ease-in-out duration-300"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image
          src={menuSrc}
          alt="mobilemenu"
          width={35}
          height={35}
          className="max-700:max-w-[30px] max-400:max-w-[26px] max-300:max-w-[20px] "
        />
      </button>
      {isOpen && (
        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          popup={popup}
          setPopup={setPopup}
        />
      )}
    </div>
  );
}

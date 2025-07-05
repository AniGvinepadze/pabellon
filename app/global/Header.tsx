"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
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
  const [textColor, setTextColor] = useState<string>("text-secondaryTextColor");
  const [globalSrc, setGlobalSrc] = useState<any>(glovabIcon);
  const [showNewPopup, setShowNewPopup] = useState<boolean>(false);
  const [menuSrc, setMenuSrc] = useState<any>(mobilemenu);

  const [marginTop, setMarginTop] = useState<string>("mt-0");
  const [maxWidth, setMaxWidth] = useState<string>("max-w-[3600px]");
  const [borderRadius, setBorderRadius] = useState<string>("rounded-none");
  const [mobbgColor, setMobBgColor] = useState<string>("bg-beige");
  const [mobtextColor, setMobTextColor] = useState<string>("text-beige");
  const [mobglobalSrc, setMobGlobalSrc] = useState<any>(glovabIcon);
  const [mobshowNewPopup, setMobShowNewPopup] = useState<boolean>(false);
  const [mobmarginTop, setMobMarginTop] = useState<string>("top-16");

  const popupRef = useRef<HTMLDivElement | null>(null);
  const globalPopupRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (showNewPopup) {
      setShowNewPopup(false);
    }
    if (popup) {
      setPopup(false);
    }

    if (window.scrollY > 50) {
      setBgColor("bg-secondaryTextColor");
      setLogoSrc(whiteLogo);
      setGlobalSrc(whiteglovabIcon);
      setMenuSrc(whiteMobileMenu);
      setTextColor("text-beige");
      setMarginTop("top-5");
      setMaxWidth("max-w-[1245px]");
      setBorderRadius("rounded-[10px]");
      setMobBgColor("bg-secondaryTextColor");
      setMobGlobalSrc(whiteglovabIcon);
      setMobTextColor("text-beige");
      setMobMarginTop("top-24");
    } else {
      setBgColor("bg-beige");
      setLogoSrc(logo);
      setGlobalSrc(glovabIcon);
      setMenuSrc(mobilemenu);
      setTextColor("text-black");
      setMarginTop("mt-0");
      setMaxWidth("max-w-[3600px]");
      setBorderRadius("rounded-none");
      setMobBgColor("bg-beige");
      setMobGlobalSrc(glovabIcon);
      setMobTextColor("text-black");
      setMobMarginTop("top-16");
    }
    setIsOpen(false);
    setMobShowNewPopup(false);
  };

  useEffect(() => {
    if (popup) {
      document.addEventListener("click", handleClickOutsideSec);
    } else {
      document.removeEventListener("click", handleClickOutsideSec);
    }

    if (showNewPopup) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("click", handleClickOutsideSec);
    };
  }, [showNewPopup, popup]);

  const handleClickOutside = (e: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      setShowNewPopup(false);
    }
  };

  const handleClickOutsideSec = (e: MouseEvent) => {
    if (
      globalPopupRef.current &&
      !globalPopupRef.current.contains(e.target as Node)
    ) {
      setPopup(false);
    }
  };

  const handleItemClick = (route: string | undefined) => {
    if (!route) {
      setShowNewPopup((prev) => !prev);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`w-full ${bgColor} sticky top-0 z-50 transition-all ease-in-out duration-500 ${maxWidth} ${borderRadius} ${marginTop} mx-auto  `}
    >
      <div
        className={`max-w-[1400px] w-full m-auto px-3 pb-1 flex justify-between items-center max-1000:gap-10`}
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
            className="max-w-[240px] w-full object-contain max-700:max-w-[220px] bg-transparent transition-all ease-in-out duration-500"
          />
        </Link>
        <div
          className={`flex gap-6 mt-1 max-w-[1250px] w-full max-1250:hidden ${textColor} transition-all duration-500 ease-in-out`}
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
                ref={popupRef}
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
                ref={globalPopupRef}
                className={`absolute w-[150px]  items-center -right-2 ${textColor} ${bgColor}   p-4 shadow-md `}
              >
                <p className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300">
                  ENG
                </p>
                <p className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300">
                  GEO
                </p>
              </div>
            )}
          </div>
        </div>
        <button
          className="hidden max-1250:flex hover:scale-110 mt-3 transition-all ease-in-out duration-300"
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
            handleScroll={handleScroll}
            mobbgColor={mobbgColor}
            mobtextColor={mobtextColor}
            mobglobalSrc={mobglobalSrc}
            mobshowNewPopup={mobshowNewPopup}
            setMobShowNewPopup={setMobShowNewPopup}
            mobmarginTop={mobmarginTop}
          />
        )}
      </div>
    </div>
  );
}

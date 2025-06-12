"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/assets/logo.svg";
import { navbar } from "..";
import glovabIcon from "../../public/assets/image 2 (2).svg";
import Link from "next/link";
import mobilemenu from "../../public/assets/Vector.svg";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);

  return (
    <div className="max-w-[1600px] sticky top-0 z-50 bg-beige w-full m-auto p-3 flex justify-between items-center max-1000:gap-10  ">
      <Link
        href="/home"
        className="hover:scale-110 transition-all ease-in-out duration-300"
      >
        <Image
          src={logo}
          alt="logo"
          width={300}
          height={90}
          className="max-w-[300px] w-full object-contain max-700:max-w-[220px] bg-beige"
        />
      </Link>
      <div className="flex gap-6  mt-1 max-w-[1300px] w-full max-1100:hidden">
        <div className="flex gap-7 w-full justify-end items-center mt-4">
          {navbar.map((e) => (
            <Link
              href={e.route}
              key={e.id}
              className="max-w-[1000px]  hover:scale-110 transition-all ease-in-out duration-300"
            >
              <p className="text-xl font-medium max-1250:text-lg max-1150:text-base">
                {e.title}{" "}
              </p>
            </Link>
          ))}
        </div>
        <div className="relative ">
          <button
            className="hover:scale-110 transition-all ease-in-out duration-300 mt-4"
            onClick={() => setPopup((prev) => !prev)}
          >
            <Image
              src={glovabIcon}
              alt="globalIcon "
              width={43}
              height={43}
              className="cursor-pointer mt-2"
            />
          </button>
          {popup && (
            <div className="absolute w-[150px]  items-center -right-2 bg-white  p-4 shadow-md rounded-md">
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
          src={mobilemenu}
          alt="mobilemenu"
          width={35}
          height={35}
          className="max-700:max-w-[30px] max-400:max-w-[26px] max-300:max-w-[20px]"
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

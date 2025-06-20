"use client";
import Image from "next/image";
import React from "react";
import { logo, whiteLogo } from "../assets";
import { footerNavbar, footerSoc } from "..";
import Link from "next/link";
import glovabIcon from "../../public/assets/Vector (9).svg";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const footerBackgroundColor =
    pathname === "/rooms" ||
    pathname === "/kids" ||
    pathname === "/agro" ||
    pathname === "/blogs"
      ? "#CDBDA4"
      : "#37292B";
  const textColor =
    pathname === "/rooms" ||
    pathname === "/kids" ||
    pathname === "/agro" ||
    pathname === "/blogs"
      ? "#37292B"
      : "#EBE5DA";

  const logoImage =
    pathname === "/rooms" ||
    pathname === "/kids" ||
    pathname === "/agro" ||
    pathname === "/blogs"
      ? logo
      : whiteLogo;

  return (
    <div
      className="max-w-[3600px] w-full "
      style={{ backgroundColor: footerBackgroundColor }}
    >
      <div
        className={`max-w-[1300px] w-full m-auto px-12 bg-footerBg bg-cover text-beige mt-20`}
        style={{ backgroundColor: footerBackgroundColor }}
      >
        <div className="flex justify-between py-10 w-full">
          <div className="min-h-[300px] flex flex-col justify-between gap-10">
            <Image src={logoImage} alt="logo" width={300} height={120} />
            <div className="max-w-[240px] w-full justify-between mt-10 hidden max-650:flex max-650:mt-0">
              <div className="flex flex-col gap-3">
                {footerNavbar.map((e) =>
                  e.route ? (
                    <Link
                      key={e.id}
                      href={e.route}
                      className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300"
                      style={{ color: textColor }}
                    >
                      {e.title}
                    </Link>
                  ) : (
                    <span
                      key={e.id}
                      className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300"
                      style={{ color: textColor }}
                    >
                      {e.title}
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  {footerSoc.map((e) => (
                    <Link
                      href={e.link}
                      key={e.id}
                      className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300"
                      style={{ color: textColor }}
                    >
                      {e.soc}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1" style={{ color: textColor }}>
              <p className="text-base font-light">contact us :</p>
              <p className="font-light text-base">Email : info@pabellon.ge</p>
              <p className="font-light text-base">
                Phone Number: (+995) 35 2 200200
              </p>
            </div>
            <div className="hidden max-650:flex">
              <Image src={glovabIcon} alt="icon" width={24} height={24} />
            </div>
          </div>

          <div className="max-w-[240px] w-full flex justify-between mt-10 max-650:hidden">
            <div className="flex flex-col gap-3">
              {footerNavbar.map((e) =>
                e.route ? (
                  <Link
                    key={e.id}
                    href={e.route}
                    className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300"
                    style={{ color: textColor }}
                  >
                    {e.title}
                  </Link>
                ) : (
                  <span
                    key={e.id}
                    className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300"
                    style={{ color: textColor }}
                  >
                    {e.title}
                  </span>
                )
              )}
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-3">
                {footerSoc.map((e) => (
                  <Link
                    href={e.link}
                    key={e.id}
                    className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300"
                    style={{ color: textColor }}
                  >
                    {e.soc}
                  </Link>
                ))}
              </div>
              <div className="flex justify-end">
                <Image src={glovabIcon} alt="icon" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

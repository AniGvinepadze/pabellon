import Image from "next/image";
import React from "react";
import { logo } from "../assets";
import { footerNavbar, footerSoc } from "..";
import Link from "next/link";
import glovabIcon from "../../public/assets/image 2 (2).svg";

export default function Footer() {
  return (
    <div className="max-w-[1600px] w-full m-auto px-12 bg-footerBg bg-secondaryTextColor bg-cover text-beige mt-20">
      <div className="flex justify-between py-10">
        <div className="min-h-[300px] flex flex-col justify-between">
          <Image src={logo} alt="logo" width={300} height={120} />

          <div className="flex flex-col gap-1">
            <p className="text-base font-light">contact us :</p>
            <p className="font-light text-base">Email : info@pabellon.ge</p>
            <p className="font-light text-base">
              Phone Number: (+995) 35 2 200200
            </p>
          </div>
        </div>

        <div className="max-w-[240px] w-full flex justify-between mt-10">
          <div className="flex flex-col gap-3 ">
            {footerNavbar.map((e) => (
              <Link
                href={e.route}
                key={e.id}
                className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300 text-beige"
              >
                {e.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-3 ">
              {footerSoc.map((e) => (
                <Link
                  href={e.link}
                  key={e.id}
                  className="text-base font-normal hover:text-[17px] hover transition-all ease-in-out duration-300 text-beige"
                >
                  {e.soc}
                </Link>
              ))}
            </div>
            <div className="flex justify-end">
              <Image src={glovabIcon} alt="icon" width={34} height={34} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

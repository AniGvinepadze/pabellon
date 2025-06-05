"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import logo from "../../../public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function LanginPage() {
  return (
    <div className="relative w-full h-screen flex flex-col justify-between items-center p-5 ">
      <div className="absolute inset-0 bg-hero bg-no-repeat bg-cover bg-top opacity-30 z-0" />

      <div className="relative z-10 w-full h-screen flex flex-col justify-between items-center ">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src={logo}
            alt="logo"
            width={340}
            height={90}
            className="max-w-[340px] w-full object-contain max-450:max-w-[280px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          <Link
            href={`https://live.ipms247.com/booking/book-rooms-pabellonhotel`}
          >
            <button className="px-10 py-3 rounded-3xl bg-transparent border-[2px] text-beige text-lg font-medium bg-[#242424] border-black flex justify-center shadow-slate-600 shadow-sm hover:bg-transparent hover:text-black transition-all ease-in-out duration-5 00 ">
              Book now{" "}
            </button>
          </Link>
        </motion.div>

        <div className="w-full max-w-[1440px] text-start font-mono-serif ">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex justify-between gap-2 p-6 w-full max-700:flex-col max-700:items-center max-450:gap-0 max-450:p-4 max-450:py-28 "
          >
            <p className="text-2xl my-3  hidden font-normal italic max-450:text-lg max-700:flex max-450:my-[6px] max-350:text-base">
              contact us:
            </p>

            <p className="text-2xl font-normal italic max-450:text-lg max-350:text-base">
              sales@pabellon.ge
            </p>
            <p className="text-2xl font-normal italic max-450:text-lg max-700:hidden ">
              contact us
            </p>

            <p className="text-2xl font-normal italic max-450:text-lg max-350:text-base">
              (+995) 555 390 393
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

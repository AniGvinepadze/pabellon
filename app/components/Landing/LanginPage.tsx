"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import logo from "../../../public/assets/logo.svg";
import Image from "next/image";

export default function LanginPage() {
  return (
    <div className="w-full m-auto h-screen bg-hero bg-no-repeat bg-cover flex flex-col justify-between items-center  p-5 bg-top coming-soon-bg">
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
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-[61px] mb-3  drop-shadow-lg max-550:text-4xl max-450:text-3xl max-350:text-2xl font-mono-serif font-semibold tracking-wider ">
          COMING SOON
        </h1>
        <p className=" text-[40px] font-normal max-800:text-[30px] max-550:text-xl font-mono-serif max-400:text-base">
          Launch date June 15, 2025
        </p>
      </motion.div>
      <div className="w-full max-w-[1440px]  text-start font-mono-serif ">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="z-10 flex justify-between gap-2  p-6 w-full max-700:flex-col max-700:items-center  "
        >
             <p className="text-2xl my-3 hidden font-normal italic max-450:text-lg max-700:flex max-450:my-[6px]">
            contact us:
          </p>

          <p className="text-2xl font-normal italic max-450:text-lg">
            sales@pabellon.ge
          </p>
          <p className="text-2xl font-normal italic max-450:text-lg max-700:hidden">
            contact us
          </p>

          <p className="text-2xl font-normal italic max-450:text-lg">
            (+995) 555 390 393
          </p>
        </motion.div>
      </div>
    </div>
  );
}

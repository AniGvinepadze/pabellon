"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import logo from "../../../public/assets/logo.svg";
import Image from "next/image";

export default function LanginPage() {
  return (
    <div className="w-full m-auto h-screen bg-hero bg-no-repeat flex flex-col justify-between items-center bg-beige p-5 bg-top coming-soon-bg">
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
          className="max-w-[340px] w-full object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-[61px] mb-6 drop-shadow-lg max-550:text-4xl max-450:text-3xl max-350:text-2xl font-mono-serif font-semibold tracking-wider ">
          COMING SOON
        </h1>
        <p className="mb-8 text-[40px] font-normal max-800:text-[30px] max-550:text-xl font-mono-serif max-400:text-base">
          We’re launching something amazing. Stay tuned!
        </p>
        {/* <button
            //   onClick={() => setShowPopup(true)}
            className="bg-white text-indigo-900 px-6 py-3 rounded-full shadow-lg font-semibold hover:scale-105 transition"
            >
            Notify Me
            </button> */}
      </motion.div>
      <div className="w-full text-start font-mono-serif ">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="z-10  mt-16 mb-6 space-y-2 max-550:mt-7"
        >
          <h2 className="text-xl font-normal italic max-450:text-lg">
            Contact Us
          </h2>
          <div className="flex flex-col w-full items-start  gap-2 text-sm sm:text-base">
            <p className="italic ">sales@pabellon.ge</p>
            <p className="italic">555 390 393</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

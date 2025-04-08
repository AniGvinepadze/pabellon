"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone } from "lucide-react";


export default function LanginPage() {
  return (
    <div className="max-w-[1440px] w-full m-auto h-screen flex justify-center items-center  ">
       <div className="p-6 max-350:p-3">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-lg animate-bounce max-550:text-5xl max-450:text-4xl max-350:text-3xl">
          COMING SOON
        </h1>
        <p className="text-gray-800 mb-8 text-lg font-medium max-550:text-base">
          We’re launching something amazing. Stay tuned!
        </p>
        {/* <button
        //   onClick={() => setShowPopup(true)}
          className="bg-white text-indigo-900 px-6 py-3 rounded-full shadow-lg font-semibold hover:scale-105 transition"
        >
          Notify Me
        </button> */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="z-10 text-center mt-16 mb-6 space-y-2 max-550:mt-7"
      >
        <h2 className="text-xl font-semibold max-450:text-lg">Contact Us</h2>
        <div className="flex flex-col items-center gap-2 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-purple-300" />
            <span className="text-gray-700">sales@pabellon.ge</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-purple-300" />
            <span className="text-gray-700">555 390 393</span>
          </div>
        </div>
      </motion.div>
      </div>
    </div>
  );
}

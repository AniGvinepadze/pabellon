"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone } from "lucide-react";


export default function LanginPage() {
  return (
    <div className="max-w-[1440px] w-full m-auto h-screen flex justify-center items-center ">
       <div >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-lg animate-bounce ">
          COMING SOON
        </h1>
        <p className="text-gray-800 mb-8 text-lg font-medium">
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
        className="z-10 text-center mt-16 mb-6 space-y-2"
      >
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <div className="flex flex-col items-center gap-2 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-purple-300" />
            <span>+995 599 123 456</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-purple-300" />
            <span>hello@yourdomain.com</span>
          </div>
        </div>
      </motion.div>
      </div>
    </div>
  );
}

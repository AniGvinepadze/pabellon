import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import whiteglovabIcon from "../../public/assets/Vector (9).svg";
import glovabIcon from "../../public/assets/Vector (10).svg";
import { AnimatePresence, motion } from "framer-motion";
import { navbar } from "..";
import { set } from "date-fns";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  popup: boolean;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  handleScroll: () => void;
  mobbgColor: string;
  mobtextColor: string;
  mobglobalSrc: string;
  mobshowNewPopup: boolean;
  setMobShowNewPopup: React.Dispatch<React.SetStateAction<boolean>>;
  mobmarginTop: string;
}

export default function MobileMenu({
  isOpen,
  setIsOpen,
  popup,
  setPopup,
  handleScroll,
  mobbgColor,
  mobglobalSrc,
  mobmarginTop,
  mobshowNewPopup,
  setMobShowNewPopup,
  mobtextColor,
}: MobileMenuProps) {
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const showNewPopupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        showNewPopupRef.current &&
        !showNewPopupRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setMobShowNewPopup(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleScroll]);

  const handleItemClick = (title: string) => {
    if (title.toLowerCase() !== "Experiences") {
      setIsOpen(true);
      setMobShowNewPopup(true);
    }
  };

  const handleItemOnClick = () => {
    setIsOpen(false);
    setMobShowNewPopup(false);
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={mobileMenuRef}
          className={`fixed left-0 right-0 z-50 max-1250:block hidden ${mobbgColor} ${mobtextColor} ${mobmarginTop} max-1250:max-w-[1000px] max-350:max-w-[500px] w-full max-h-[calc(100vh-64px)] overflow-y-auto rounded-b-lg`}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 2 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="w-full shadow-md p-4 max-350:p-2">
            <div className="flex flex-col justify-between h-full">
              <div className={`flex flex-col gap-5 px-7 py-3`}>
                {navbar.map((e) =>
                  e.route ? (
                    <Link
                      key={e.id}
                      href={e.route}
                      className="max-w-[1000px] relative"
                      onClick={() => handleItemClick(e.title)}
                    >
                      <p className="text-xl hover:text-[21px] transition-all ease-in-out duration-300 font-medium max-1250:text-lg max-1150:text-base">
                        {e.title}
                      </p>
                    </Link>
                  ) : (
                    <p
                      key={e.id}
                      onClick={() => handleItemClick(e.title)}
                      className="relative"
                    >
                      {e.title}
                    </p>
                  )
                )}
                {mobshowNewPopup && (
                  <div
                    ref={showNewPopupRef}
                    className={`absolute max-w-[300px] bottom-16 left-7 ${mobbgColor} ${mobtextColor} p-4 shadow-md flex flex-col`}
                  >
                    <Link
                      href={"/makrine-restaurant"}
                      className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
                      onClick={handleItemOnClick}
                    >
                      Bars & Restaurants
                    </Link>
                    <Link
                      href={"/meetings-events"}
                      className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
                      onClick={handleItemOnClick}
                    >
                      Meetings & Events
                    </Link>
                    <Link
                      href={"/wellness-fitness"}
                      className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
                      onClick={handleItemOnClick}
                    >
                      Spa & Wellness
                    </Link>
                    <Link
                      href={"/kids-entertainment"}
                      className="text-base font-medium my-2 cursor-pointer hover:text-lg transition-all ease-in-out duration-300"
                      onClick={handleItemOnClick}
                    >
                      Kids Entertainment
                    </Link>
                  </div>
                )}
                <div className="relative w-fit -ml-2 ">
                  <button onClick={() => setPopup((prev) => !prev)}>
                    <Image
                      priority={true}
                      src={mobglobalSrc}
                      alt="globalIcon"
                      width={20}
                      height={20}
                      className="cursor-pointer hover:w-[30px] transition-all ease-in-out duration-300 mx-2"
                    />
                  </button>
                  {popup && (
                    <div
                      className={`absolute top-12 left-0 w-[150px] p-4 shadow-md rounded-md z-50 ${mobbgColor} ${mobtextColor}`}
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
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

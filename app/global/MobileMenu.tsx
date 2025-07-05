import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import whiteglovabIcon from "../../public/assets/Vector (9).svg";
import glovabIcon from "../../public/assets/Vector (10).svg";
import { AnimatePresence, motion } from "framer-motion";
import { navbar } from "..";

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
  // const [bgColor, setBgColor] = useState<string>("bg-beige");
  // const [textColor, setTextColor] = useState<string>("text-beige");
  // const [globalSrc, setGlobalSrc] = useState<any>(glovabIcon);
  // const [showNewPopup, setShowNewPopup] = useState<boolean>(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const showNewPopupRef = useRef<HTMLDivElement | null>(null);

  // const handleScroll = () => {
  //   if (window.scrollY > 50) {
  //     setBgColor("bg-secondaryTextColor");
  //     setGlobalSrc(whiteglovabIcon);
  //     setTextColor("text-beige");
  //   } else {
  //     setBgColor("bg-beige");
  //     setGlobalSrc(glovabIcon);
  //     setTextColor("text-black");
  //   }

  //   setIsOpen(false);
  //   setShowNewPopup(false);
  // };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Close both isOpen and showNewPopup if clicking outside
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
  }, []);

  const handleItem2Click = (route: string | undefined) => {
    if (!route) {
      setMobShowNewPopup((prev) => !prev);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={mobileMenuRef}
          className={`fixed  left-0 right-0 z-50 max-1250:block hidden max-700:top-20 ${mobbgColor} ${mobtextColor} ${mobmarginTop} max-1250:max-w-[1000px] max-350:max-w-[500px] w-full max-h-[calc(100vh-64px)] overflow-y-auto rounded-b-lg`}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 2 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="w-full shadow-md p-4 max-350:p-2">
            <div className="flex flex-col justify-between h-full">
              <div className={`flex flex-col gap-5 px-7 py-3  `}>
                {navbar.map((e) =>
                  e.route ? (
                    <Link
                      key={e.id}
                      href={e.route}
                      className="max-w-[1000px]   relative"
                    >
                      <p className="text-xl hover:text-[21px] transition-all ease-in-out duration-300 font-medium max-1250:text-lg max-1150:text-base ">
                        {e.title}
                      </p>
                    </Link>
                  ) : (
                    <p
                      key={e.id}
                      onClick={() => handleItem2Click(e.route)}
                      className="relative"
                    >
                      {e.title}
                    </p>
                  )
                )}
                {mobshowNewPopup && (
                  <div
                    ref={showNewPopupRef} 
                    className={`absolute max-w-[300px]  mt-56 ${mobbgColor} ${mobtextColor}  p-4 shadow-md flex flex-col `}
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
                <div className="relative w-fit -ml-4">
                  <button onClick={() => setPopup((prev) => !prev)}>
                    <Image
                      priority={true}
                      src={mobglobalSrc}
                      alt="globalIcon"
                      width={24}
                      height={24}
                      className="cursor-pointer hover:w-[30px] transition-all ease-in-out duration-300 mx-2"
                    />
                  </button>
                  {popup && (
                    <div
                      className={`absolute top-12 left-0 w-[150px] p-4 shadow-md rounded-md z-50 ${mobbgColor} ${mobtextColor} `}
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

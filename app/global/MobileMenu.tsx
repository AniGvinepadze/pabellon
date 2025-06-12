import React from "react";
import Image from "next/image";
import Link from "next/link";
import globalIcon from "../../public/assets/image 2 (2).svg";

import { AnimatePresence, motion } from "framer-motion";
import { navbar } from "..";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  popup: boolean;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu({
  isOpen,
  setIsOpen,
  popup,
  setPopup,
}: MobileMenuProps) {

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-20 left-0 right-0 z-50  max-1100:block hidden bg-beige"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 2 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="w-full shadow-md  p-4 max-350:p-2">
            <div className="flex flex-col justify-between h-full text-black">
              <div className="flex flex-col gap-5 px-7 py-3 max-400:gap-2">
                {navbar.map((item) => (
                  <Link
                    key={item.id}
                    href={item.route}
                    onClick={() => setIsOpen(false)}
                  >
                    <p className="text-lg hover:text-[19px] font-medium transition-all duration-300  ease-in-out max-300:text-base">
                      {item.title}
                    </p>
                    <div className="hover:scale-110 transition-all ease-in-out duration-300 mt-4">
                      {" "}
                    </div>
                  </Link>
                ))}

                <div className="relative w-fit -ml-4">
                  <button onClick={() => setPopup((prev) => !prev)}>
                    <Image
                      src={globalIcon}
                      alt="globalIcon"
                      width={43}
                      height={43}
                      className="cursor-pointer hover:w-[50px] transition-all ease-in-out duration-300"
                    />
                  </button>
                  {popup && (
                    <div className="absolute top-12 left-0 bg-beige w-[150px] p-4 shadow-md rounded-md z-50">
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

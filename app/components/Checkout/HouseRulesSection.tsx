import React from "react";

export default function HouseRulesSection() {
  return (
    <div className="max-w-[1100px] w-full m-auto  text-black ">
      <div className="max-w-[850px] w-full flex flex-col text-black font-mono-serif gap-6 max-400:gap-3 my-28 max-450:mt-44 ">
        <h2
          className="text-[26px] font-medium max-450:text-2xl
        "
        >
          HOUSE RULES
        </h2>

        <div className="w-full flex flex-col gap-4 my-10">
          <div className="max-w-[270px]">
            <div className="flex justify-between max-w-[250x] w-full gap-7">
              <p className="font-normal text-xl">Check-In</p>
              <p className="font-normal text-base">15:00</p>
            </div>
            <div className="flex justify-between max-w-[250x] w-full my-2 gap-7">
              <p className="font-normal text-xl">Check-Out</p>
              <p className="font-normal text-base">12:00</p>
            </div>
          </div>
          <div className="max-w-[640px] w-full flex justify-between my-8 gap-7 max-500:flex-col">
            <p className="font-normal text-xl">
              Payment and cancellation policy
            </p>
            <p className="font-normal text-base max-w-[413px] w-full">
              To guarantee your reservation total amount of first night should
              be prepaid. If reservation is not pre-paid, hotel has the right to
              consider the reservation as non-guaranteed and cancel it the day
              before 16:00 the arrival date of the guest. In case of guaranteed
              reservation, if the guest has not arrived in the hotel, the
              reservation will be cancelled and the fine of the no-show will be
              considered - the full cost of one night. Guest can cancel
              reservation free of charge 72hrs prior arrival.
            </p>
          </div>
        </div>
        <div className="max-w-[460px] w-full flex justify-between gap-7 max-500:flex-col">
          <p className="font-normal text-xl">Additional Information</p>
          <div>
            <p className="font-normal text-base mb-3">
              Pet Friendly (pet less than 8 kg)
            </p>
            <p>Rooms are non- smoking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

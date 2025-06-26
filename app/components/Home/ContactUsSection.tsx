import React from "react";

export default function ContactUsSection() {
  return (
    <div className="max-w-[980px] w-full m-auto bg-ilialake min-h-[990px] mt-20 flex flex-col items-center justify-center text-center text-secondaryTextColor max-700:bg-center bg-cover  max-1100:mt-0  max-450:mt-0">
      <div className="flex flex-col gap-4 max-400:gap-2">
        <h2 className="font-semibold text-[40px] max-450:text-[32px]">
          Further Questions
        </h2>
        <p className="font-light text-base">
          Pabellon Hotel team is available to assist you with reservation and
          other inquiries.
        </p>
        <p className="italic font-normal text-xl custom-font">
          Please contact us for further details.
        </p>
        <div>
          <p className="font-light text-sm">Email : info@pabellon.ge</p>
          <p className="font-light text-sm">Phone Number: (+995) 35 2 200200</p>
        </div>
      </div>
    </div>
  );
}

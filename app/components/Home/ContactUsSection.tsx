import React from "react";

export default function ContactUsSection() {
  return (
    <div className="max-w-[980px] w-full m-auto bg-ilialake min-h-[990px] mt-20 flex flex-col items-center justify-center text-center text-secondaryTextColor max-700:bg-center bg-cover  max-1250:mt-0  max-450:mt-0">
      <div className="flex flex-col gap-4 max-400:gap-2">
        <h2 className="font-semibold text-[40px] max-650:text-[32px]">
          For any additional questions, please don’t hesitate to contact us.
        </h2>
        <p className="font-light text-base">
          Our hotel team is always ready to assist you
        </p>
        <p className="italic font-normal text-xl custom-font">Get in touch:</p>
        <div>
          <p className="font-light text-sm">Email address : info@pabellon.ge</p>
          <p className="font-light text-sm">Phone : (+995) 35 2 200200</p>
        </div>
      </div>
    </div>
  );
}

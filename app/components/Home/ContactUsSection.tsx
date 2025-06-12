import React from "react";

export default function ContactUsSection() {
  return (
    <div className="max-w-[980px] w-full m-auto bg-ilialake min-h-[990px] mt-96 flex flex-col items-center justify-center text-center text-secondaryTextColor">
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-[40px]">Further Questions</h2>
        <p className="font-light text-base">
          Pabellon Hotel team is available to assist you with reservation and
          other inquiries. //შესაცვლელია
        </p>
        <p className="italic font-normal text-xl">Please contact us for further details.</p>
        <div>
            <p className="font-light text-sm">Email :  info@pabellon.ge</p>
            <p className="font-light text-sm">Phone Number: (+995) 35 2 200200</p>
        </div>
      </div>
    </div>
  );
}

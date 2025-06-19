import React from "react";

export default function FurtherQuestionSection() {
  return (
    <div className="max-w-[600px] w-full m-auto my-20 flex flex-col items-center justify-center text-center text-secondaryTextColor  ">
      <div className="flex flex-col gap-4 max-400:gap-2">
        <h2 className="font-semibold text-[40px] max-450:text-[32px]">
          Further Questions
        </h2>
        <p className="font-light text-base">
          Pabellon Hotel team is available to assist you with reservation and
          other inquiries.
        </p>
        <p className="italic font-normal custom-font text-xl">
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

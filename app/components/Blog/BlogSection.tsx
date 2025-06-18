import React from "react";

export default function BlogSection() {
  return (
    <div className="max-w-[1400px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor">
      <div className="max-w-[650px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-6 max-400:gap-3">
        <h2 className="font-semibold text-[40px]  max-600:text-[32px] max-400:text-[26px]">
          Last News
        </h2>
      </div>
      <div></div>
    </div>
  );
}

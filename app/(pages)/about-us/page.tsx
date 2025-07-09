import AboutUsaSection from "@/app/components/About-us/AboutUsaSection";
import AboutUsIliasSection from "@/app/components/About-us/AboutUsIliasSection";
import React from "react";

export default function AboutUs() {
  return (
    <div className="max-w-[1600px] m-auto p-3">
      <div className="mt-20">
        <AboutUsaSection />
        <AboutUsIliasSection />
      </div>
    </div>
  );
}

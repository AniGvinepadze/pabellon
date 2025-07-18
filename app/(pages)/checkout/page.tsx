import AdditionalDetailsSection from "@/app/components/Checkout/AdditionalDetailsSection";
import ContactInfo from "@/app/components/Checkout/ContactInfo";
import HouseRulesSection from "@/app/components/Checkout/HouseRulesSection";
import React from "react";

export default function page() {
  return (
    <div className="max-w-[1600px] m-auto p-3">
      <div className="my-20">
        <ContactInfo />
        <AdditionalDetailsSection/>
        <HouseRulesSection />
      </div>
    </div>
  );
}

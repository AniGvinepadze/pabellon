import ContactUsSection from "@/app/components/Home/ContactUsSection";
import MakrineBarSection from "@/app/components/Makrine-Resraurant/MakrineBarSection";
import MakrineLobbyBartSection from "@/app/components/Makrine-Resraurant/MakrineLobbyBarSection";
import MakrineMenu from "@/app/components/Makrine-Resraurant/MakrineMenu";
import MakrinePoolBarSection from "@/app/components/Makrine-Resraurant/MakrinePoolbarsection";
import MakrineRestaurantBookSection from "@/app/components/Makrine-Resraurant/MakrineRestaurantBookSection";
import MakrinerestaurantSection from "@/app/components/Makrine-Resraurant/MakrineRestaurantSection";
import MakrineSection from "@/app/components/Makrine-Resraurant/MakrineSection";
import MakrineSwiperSection from "@/app/components/Makrine-Resraurant/MakrineSwiperSection";
import FurtherQuestionSection from "@/app/components/Meetings-events/FurtherQuestionsSection";
import React from "react";

export default function page() {
  
  return (
    <div className="max-w-[1600px] m-auto p-3">
      <div className="mt-28">
        <MakrineSection />
        <MakrineRestaurantBookSection />
        <div className="">
          <MakrineMenu />
          <MakrineSwiperSection />
          <MakrinerestaurantSection />
          <MakrineBarSection />
          <MakrineLobbyBartSection />
          <MakrinePoolBarSection />
          <div className="mb-32">
          <ContactUsSection/>
          </div>
        </div>
      </div>
    </div>
  );
}

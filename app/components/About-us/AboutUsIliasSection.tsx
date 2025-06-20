import { iliaLake, inscription } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function AboutUsIliasSection() {
  return (
    <div className="max-w-[1300px] w-full m-auto flex flex-col justify-center items-center text-center text-secondaryTextColor ">
      <div className=" max-w-[1000px] w-full flex flex-col justify-center items-center text-center text-secondaryTextColor font-mono-serif gap-16">
        <p className="font-light text-[17px] max-500:text-[15px]">
          Modern and elegantly designed rooms, stunning views of Alazani Valley,
          authentic dining options, gastronomic adventures and masterclasses,
          indoor and outdoor pool, spa and fitness, kids entertainment,
          conference rooms, personalized guest services to cater to your every
          need through the events. And of course, the Wine! We invite you to
          explore and enjoy the excellence of homegrown craftsmanship in every
          glass. Savor the unique character of our domestic wines, crafted with
          care from vineyards right here at home. From bold reds to crisp
          whites, each bottle tells a story of local passion, sustainable
          practices and winemaking traditions.
        </p>
        <Image
          priority={true}
          src={iliaLake}
          alt="ilialake"
          width={978}
          height={992}
        />
      </div>
      <div className="flex flex-col gap-24 justify-center mt-16 max-450:gap-12">
        <p className="font-light text-[17px] max-500:text-[15px]">
          In Kvareli, where Ilia Chavchavadze spent his childhood, the
          surroundings create an atmosphere WHERE STORIES LIVE. While standing
          under the majestic canopy of a walnut tree, you feel the timeless
          moment that reflects the essence of our brand and its connection to
          Georgian heritage and literature. And Makrine, Aunt - who raised him
          as her own child, is someone who values family, tradition and sharing
          a delicious meal in a beautiful setting. We promise a warm and
          nurturing dining experience, inspired by Makrine's legacy, where you
          can taste delicious food and create lasting memories with loved ones.
          Farm to table movement highlights the importance of nutritional value
          and community engagement. In addition of the true agricultural
          concept, it is a luxurious destination where comfort, style and
          unforgettable experiences meet.
        </p>
        <div className="flex justify-center">
          <Image
            priority={true}
            src={inscription}
            alt="ilialake"
            width={660}
            height={178}
          />
        </div>
        <p className="font-light text-[17px] max-500:text-[15px]">
          And Makrine, Aunt - who raised him as her own child, is someone who
          values family, tradition and sharing a delicious meal in a beautiful
          setting. We promise a warm and nurturing dining experience, inspired
          by Makrine's legacy, where you can taste delicious food and create
          lasting memories with loved ones. Farm to table movement highlights
          the importance of nutritional value and community engagement. In
          addition of the true agricultural concept, it is a luxurious
          destination where comfort, style and unforgettable experiences meet.
        </p>
      </div>
    </div>
  );
}

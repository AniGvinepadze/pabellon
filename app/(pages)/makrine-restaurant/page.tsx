import MakrineRestaurantBookSection from '@/app/components/Makrine-Resraurant/MakrineRestaurantBookSection'
import MakrineSection from '@/app/components/Makrine-Resraurant/MakrineSection'
import MakrineSwiperSection from '@/app/components/Makrine-Resraurant/MakrineSwiperSection'
import React from 'react'

export default function page() {
  return (
    <div className="max-w-[1600px] m-auto p-3">
      <div className="mt-28">
        <MakrineSection/>
        <MakrineRestaurantBookSection/>
        <MakrineSwiperSection/>
        </div>
        </div>
  )
}

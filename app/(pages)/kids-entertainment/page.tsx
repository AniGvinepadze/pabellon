import ContactUsSection from '@/app/components/Home/ContactUsSection'
import KidsEntertainmenttSection from '@/app/components/Kids-entertenment/KidsEntertainmentSection'
import FurtherQuestionSection from '@/app/components/Meetings-events/FurtherQuestionsSection'
import React from 'react'

export default function page() {
  return (
    <div className="max-w-[1600px] m-auto p-3">
    <KidsEntertainmenttSection/>
    <div className='mb-20'>
    <ContactUsSection/>
    </div>
    </div>
  )
}
